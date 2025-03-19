export default function Joke(props) {
	return (
		<div style={{ marginLeft: "7px" }}>
			{/*
      {props.setup && <strong>Setup: {props.setup}</strong>} conditional rendering ^, better than {props.setup ?<strong>{props.setup}</strong>:<></>}, below is a ternary operator*/}
			<strong style={{ display: props.setup ? "block" : "none" }}>
				Setup: {props.setup}
			</strong>
			<p>Punchline: {props.punchline}</p>
			{props.isPun && <p>#pun</p>}
			<hr />
		</div>
	);
}
