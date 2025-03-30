import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
	const [ingredients, setIngredients] = useState(["limes", "oregano"]);
	const [recipe, setRecipe] = useState(false);

	const ingredientsListItems = ingredients.map((ingredient) => (
		<li key={ingredient}>{ingredient}</li>
	));

	function addIngredient(formData) {
		//getAll with checkboxes when we want a possible array
		// const newIngredient = formData.get("ingredient");
		// setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
		//if we have a lot of entries in the form =>
		console.log(Object.fromEntries(formData));
		// this doesn't work for arrays, you have to do that separaterly
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	}
	// form submission used to be with onSubmit prop and the function used to receive event parameter
	//this way forms maintain their own state (React 19)
	async function getRecipe() {
		const recipeMarkdown = await getRecipeFromMistral(ingredients);
		setRecipe(recipeMarkdown);
	}
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
			{/* or ingredientsListItems.length>0 with && operator*/}
			{ingredientsListItems.length ? (
				<IngredientsList
					ingredients={ingredients}
					getRecipe={getRecipe}
				/>
			) : null}
			{recipe && <ClaudeRecipe recipe={recipe} />}
		</main>
	);
}
