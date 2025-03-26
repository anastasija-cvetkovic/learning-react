import React from "react";
import { useReducer, useState } from "react";

//dispatch function outside of component because we want it to be performed not every time the component renders, but every time the action requests it
const initialState = 0;
function reducer(state, action) {
	switch (action) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return 0;
		default:
			return state;
	}
}

const CounterReducer = () => {
	//const [count, setCount] = useState(0);
	//console.log(useReducer());
	const [count, dispatch] = useReducer(reducer, initialState);
	// function incrementCounter() {
	// 	setCount(count + 1);
	// }
	// function decrementCounter() {
	// 	setCount(count - 1);
	// }
	// function resetCounter() {
	// 	setCount(0);
	// }
	return (
		<div>
			<h2>Count - {count}</h2>
			<button onClick={() => dispatch("increment")}>Increment</button>
			<button onClick={() => dispatch("decrement")}>Decrement</button>
			<button onClick={() => dispatch("reset")}>Reset</button>
		</div>
	);
};

export default CounterReducer;
