import { useState } from "react";

export default function Main() {
	const [ingredients, setIngredients] = useState([]);

	const ingredientsListItems = ingredients.map((ingredient) => (
		<li key={ingredient}>{ingredient}</li>
	));

	function addIngredient(formData) {
		//getAll with checkboxes when we want a possible array
		// const newIngredient = formData.get("ingredient");
		// setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
		//if we have a lot of entries in the form =>
		Object.fromEntries(formData); //this doesn't work for arrays, you have to do that separaterly
	}
	// form submission used to be with onSubmit prop and the function used to receive event parameter
	//this way forms maintain their own state (React 19)
	return (
		<main>
			<form
				className='add-ingredient-form'
				action={addIngredient}
			>
				{/* aria-label is for someone using a screen reader */}
				{/* defaultValue */}
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
