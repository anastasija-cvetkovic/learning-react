import React from "react";
import { useState } from "react";
const Counter = () => {
	const [count, setCount] = useState(0);
	function incrementCounter() {
		setCount(count + 1);
	}
	function decrementCounter() {
		setCount(count - 1);
	}
	function resetCounter() {
		setCount(0);
	}
	return (
		<div>
			<h2>Count - {count}</h2>
			<button onClick={incrementCounter}>Increment</button>
			<button onClick={decrementCounter}>Decrement</button>
			<button onClick={resetCounter}>Reset</button>
		</div>
	);
};

export default Counter;
