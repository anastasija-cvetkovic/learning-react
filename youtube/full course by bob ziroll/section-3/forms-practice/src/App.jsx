import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	function signUp(formData) {
		const data = Object.fromEntries(formData);
		const dietaryRestrictions = formData.getAll("dietaryRestrictions");
		//data.dietaryRestrictions = dietaryRestrictions
		const allData = {
			...data,
			dietaryRestrictions,
		};
		console.log(allData);
	}
	return (
		<section>
			<h2>Signup form</h2>
			<form action={signUp}>
				<label htmlFor='email'>Email:</label>
				<input
					id='email'
					defaultValue='joe@shmoe.com'
					type='email'
					name='email'
					placeholder='joe@shmoe.com'
				/>
				<label htmlFor='password'>Password:</label>
				<input
					type='password'
					defaultValue='password123'
					name='password'
					id='password'
				/>
				<label htmlFor='description'>Description</label>
				<textarea
					id='description'
					name='description'
					defaultValue='this is a description'
				></textarea>

				<fieldset>
					<legend>Employment status</legend>
					<label>
						<input
							type='radio'
							name='employmentStatus'
							value='unemployed'
						/>
						Unemployed
					</label>
					<label>
						<input
							type='radio'
							name='employmentStatus'
							value='part-time'
						/>
						Part-time
					</label>
					<label>
						<input
							type='radio'
							name='employmentStatus'
							value='full-time'
						/>
						Full-time
					</label>
				</fieldset>
				<fieldset>
					<legend>Dietary restrictions:</legend>
					<label>
						<input
							type='checkbox'
							name='dietaryRestrictions'
							value='kosher'
						/>
						Kosher
					</label>
					<label>
						<input
							type='checkbox'
							name='dietaryRestrictions'
							value='vegan'
						/>
						Vegan
					</label>
					<label>
						<input
							type='checkbox'
							name='dietaryRestrictions'
							value='gluten-free'
						/>
						Gluten-free
					</label>
				</fieldset>
				<label htmlFor='favColor'>WHat is your favourite colour?</label>
				<select
					id='favColor'
					name='favColor'
					defaultValue=''
					required
				>
					<option
						value=''
						disabled
					>
						-- Choose a colour --
					</option>
					<option value='red'>Red</option>
					<option value='orange'>Orange</option>
				</select>
				<button>Submit</button>
			</form>
		</section>
	);
}

export default App;
