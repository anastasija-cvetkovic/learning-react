import { useState } from "react";
export default function Main() {
	const [] = useState();
	const ingredients = ["Chicken", "Oregano", "Tomatoes"];
	const ingredientsListItems = ingredients.map((ingredient) => (
		<li key={ingredient}>{ingredient}</li>
	));

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const newIngredient = formData.get("ingredient");
		ingredients.push(newIngredient);
		console.log(ingredients);
	}
	return (
		<main>
			<form
				className='add-ingredient-form'
				onSubmit={handleSubmit}
			>
				{/* aria-label is for someone using a screen reader */}
				<input
					aria-label='Add ingredient'
					type='text'
					placeholder='e.g. oregano'
					name='ingredient'
				/>
				{/* type="button" fixes the onClick problem with page refresh */}
				<button type='submit'>Add ingredient</button>
			</form>
			<ul>{ingredientsListItems}</ul>
		</main>
	);
}
