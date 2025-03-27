import React from "react";
import { orderPizza } from "./index.js";
import { connect } from "react-redux";

function PizzaBox(props) {
	console.log(props);
	return (
		<div className='container'>
			<h2>Number of Pizza Base available - {props.pizzaBases}</h2>
			<button
				onClick={props.orderPizza}
				className='btn'
			>
				Order Pizza
			</button>
		</div>
	);
}

// this is done instead of using hooks
const mapStateToProps = (state) => {
	return {
		pizzaBases: state.pizza.pizzaBases,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		orderPizza: () => dispatch(orderPizza()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox);
//export default PizzaBox;
