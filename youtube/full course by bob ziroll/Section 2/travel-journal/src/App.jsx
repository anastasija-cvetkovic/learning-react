import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

function App() {
	const entryElements = data.map((entry) => {
		return (
			// <Entry
			// 	/*image property is an object -> {{}} and dest.img.src*/
			// 	key={entry.id}
			// 	img={entry.img}
			// 	title={entry.title}
			// 	country={entry.country}
			// 	googleMapsLink={entry.googleMapsLink}
			// 	dates={entry.dates}
			// 	text={entry.text}
			// />
			//Instead of passing every prop separately
			<Entry
				key={entry.id}
				// entry={entry}
				//spreading object, spread syntax
				{...entry}
			/>
		);
	});
	return (
		<>
			<Header />
			<main>{entryElements}</main>
		</>
	);
}

export default App;
