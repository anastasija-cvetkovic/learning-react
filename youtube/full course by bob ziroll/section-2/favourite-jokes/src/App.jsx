import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Joke from "./components/Joke";
import NinjaTurtles from "./components/NinjaTurtles";
import jokesData from "./jokesData";

function App() {
	console.log(jokesData);
	const jokesElements = jokesData.map((joke) => {
		return (
			<Joke
				setup={joke.setup}
				punchline={joke.punchline}
			/>
		);
	});
	return (
		<main>
			{/* <NinjaTurtles /> */}
			{jokesElements}
		</main>
	);
}

export default App;

{
	/* hard-coded components
	<Joke
				punchline="It's hard to explain puns to kleptomaniacs because they always take things literally."
				upvotes={10}
				isPun={true}
				comments={[
					{ author: "jokester", text: "text1", title: "t1" },
					{ author: "balatrofan", text: "text2", title: "t2" },
				]}
			/>
			<Joke
				setup='I got my daughter a fridge for her birthday.'
				punchline="I can't wait to see her face light up when she opens it."
				isPun={true}
			/>
			<Joke
				setup='How did the hacker escape the police?'
				punchline='He just ransomeware!'
				isPun={true}
			/>
			<Joke
				setup="Why don't pirates travel on mountain roads?"
				punchline='Scurvy.'
				isPun={true}
			/>
			<Joke
				setup="What's the best thing about Switzerland?"
				punchline='Swarm.'
				isPun={false}
			/> */
}
