import "./App.css";
import BurgerView from "./features/burger/BurgerView";
import PizzaView from "./features/pizza/PizzaView";
import ProductsView from "./features/products/ProductsView";

function App() {
	return (
		<>
			<PizzaView />
			<BurgerView />
			<ProductsView />
		</>
	);
}

export default App;
