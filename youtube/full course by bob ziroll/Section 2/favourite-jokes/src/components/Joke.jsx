import { useState } from "react";
export default function Joke(props) {
	const [isShown, setIsShown] = useState(false);
	function toggleShown() {
		setIsShown((prevShown) => !prevShown);
	}
	console.log(isShown);
	//better do all your logic here, save it in a variable and then display that variable down below, i.e. {callThatFunction()} instead of {isShown ? "hide" : "show"}
	return (
		<div style={{ marginLeft: "7px" }}>
			{/*conditional rendering
      {props.setup && <strong>Setup: {props.setup}</strong>} conditional rendering ^, better than {props.setup ?<strong>{props.setup}</strong>:<></>}, below is a ternary operator*/}
			<strong style={{ display: props.setup ? "block" : "none" }}>
				Setup: {props.setup}
			</strong>
			{/*there is a bug with &&, if you have 0 && something, 0 will be displayed*/}
			{/* {isShown && <p>Punchline: {props.punchline}</p>} 
			it's better to use a ternary operator*/}
			{isShown ? <p>Punchline: {props.punchline}</p> : null}
			{/* {props.isPun ? <p>#pun</p> : null} */}

			<button onClick={toggleShown}>
				{isShown ? "hide" : "show"} punchline
			</button>
			<hr />
		</div>
	);
}
