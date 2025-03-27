import "./App.css";
// import HookContainer from "./features/pizza/HookContainer";
import { Provider } from "react-redux";
import store from "./store/store";
import BurgerBox from "./features/burger/BurgerBox";
import PizzaBox from "./features/pizza/PizzaBox";

function App() {
	return (
		<Provider store={store}>
			<PizzaBox />
			{/* <HookContainer /> */}
			<BurgerBox />
		</Provider>
	);
}
export default App;
