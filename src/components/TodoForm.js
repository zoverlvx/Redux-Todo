import React, {useState} from "react";
import {connect} from "react-redux";
import {addItem} from "../actions";

function TodoForm(props) {
	console.log("props in todoform: ", props)
	const [state, setState] = useState("");

	function handleChange(e) {
		const name = {[e.target.name]: e.target.value}
		setState(name["task"]);
	}

	function handleSubmit(e) {
		e.preventDefault();
		props.addItem({task: state, id: (new Date()).getTime(), completed: false})
		setState("")
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				placeholder="Add a task..."
				name="task"
				value={state}
				onChange={handleChange}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

function mapStateToProps(state) {
	return {
		todos: state
	}
}

export default connect(mapStateToProps, {addItem})(TodoForm);
