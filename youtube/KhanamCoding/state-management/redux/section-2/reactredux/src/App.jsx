import "./App.css";
// import HookContainer from "./features/pizza/HookContainer";
import { Provider } from "react-redux";
import store from "./store/store";

import CustomerChoice from "./components/CustomerChoice";
import ProductsContainer from "./components/ProductsContainer";

function App() {
	return (
		<Provider store={store}>
			{/* <PizzaBox />
		 <HookContainer /> 
			<BurgerBox /> */}
			<CustomerChoice />
			<ProductsContainer />
		</Provider>
	);
}
export default App;
