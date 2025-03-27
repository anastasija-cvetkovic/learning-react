import "./App.css";
// import HookContainer from "./features/pizza/HookContainer";
import { Provider } from "react-redux";
import store from "./store/store";

import CustomerChoice from "./components/CustomerChoice";

function App() {
	return (
		<Provider store={store}>
			{/* <PizzaBox />
		 <HookContainer /> 
			<BurgerBox /> */}
			<CustomerChoice />
		</Provider>
	);
}
export default App;
