import "./App.css";
import PizzaBox from "./features/Pizza/PizzaBox";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
	return (
		<Provider store={store}>
			<PizzaBox />
		</Provider>
	);
}
export default App;
