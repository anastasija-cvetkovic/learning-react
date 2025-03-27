import React, { useState } from "react";
import { orderBurger } from "../features/burger/index.js";
import { connect } from "react-redux";

function CustomerChoice(props) {
	const [number, setNumber] = useState(1);
	return (
		<div className='container'>
			<h2>Number of Burger Buns available - {props.burgerBuns}</h2>
			<input
				type='text'
				className='input-field'
				placeholder='e.g. 3'
				onChange={(e) => setNumber(e.target.value)}
				value={number}
			/>
			<button
				onClick={() => props.orderBurger(number)}
				className='btn'
			>
				Order Burger
			</button>
		</div>
	);
}

// this is done instead of using hooks
const mapStateToProps = (state) => {
	return {
		burgerBuns: state.burger.burgerBuns,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		orderBurger: (number) => dispatch(orderBurger(number)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerChoice);
