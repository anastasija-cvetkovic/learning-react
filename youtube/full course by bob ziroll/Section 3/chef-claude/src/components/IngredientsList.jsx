export default function IngredientsList() {
	return (
		<section>
			<h2>Ingredients on hand:</h2>
			<ul
				className='ingredients-list'
				aria-live='polite'
			>
				{ingredientsListItems}
			</ul>
			{ingredientsListItems.length > 1 ? (
				<div className='get-recipe-container'>
					<div>
						<h3>Ready for a recipe?</h3>
						<p>Generate a recipe from your list of ingredients.</p>
					</div>
					<button onClick={toggleRecipeShown}>Get a recipe</button>
				</div>
			) : null}
		</section>
	);
}
