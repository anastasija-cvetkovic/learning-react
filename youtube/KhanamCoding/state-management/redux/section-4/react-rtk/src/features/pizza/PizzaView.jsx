import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { customer_choice, pizza_order } from "./pizzaSlice";

function PizzaView() {
	const pizzaBases = useSelector((state) => state.pizza.pizzaBases);
	const dispatch = useDispatch();
	const [number, setNumber] = useState(1);
	return (
		<div>
			<h2>Number of pizza bases - {pizzaBases}</h2>
			<input
				type='text'
				value={number}
				onChange={(e) => setNumber(Number(e.target.value))}
			/>
			<button onClick={() => dispatch(customer_choice(number))}>
				Customer choice
			</button>

			<button onClick={() => dispatch(pizza_order())}>Order pizza</button>
		</div>
	);
}

export default PizzaView;
