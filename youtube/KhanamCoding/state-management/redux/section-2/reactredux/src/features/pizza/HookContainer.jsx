import { useSelector, useDispatch } from "react-redux";
import { orderPizza } from "./index.js";

function HookContainer() {
	const pizzaBases = useSelector((state) => state.pizzaBases);
	// this hook is returning the reference to dispatch from our redux store
	const dispatch = useDispatch();
	return (
		<div className='container'>
			<h2>Number of Pizza Base available - {pizzaBases}</h2>
			<button
				className='btn'
				onClick={() => dispatch(orderPizza())}
			>
				Order Pizza
			</button>
		</div>
	);
}

export default HookContainer;
