import React from "react";
import { orderBurger } from "./index.js";
import { connect } from "react-redux";

function BurgerBox(props) {
	return (
		<div className='container'>
			<h2>Number of Burger Buns available - {props.burgerBuns}</h2>
			<button
				onClick={props.orderBurger}
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
		orderBurger: () => dispatch(orderBurger()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox);
//export default BurgerBox;
