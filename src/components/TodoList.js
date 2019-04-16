import React from "react";
import {connect} from "react-redux";

import Todo from "./Todo";
import {toggleItem} from "../actions";

function TodoList({todos}) {
	return (
		<ul>
			{todos.map(
				(item, i) => (
				<Todo 
					key={i}
					onClick={toggleItem(i)}
					{...item}
				/>
			))}
		</ul>
	)
}

function mapStateToProps(state) {
	return {
		todos: state
	};
}

export default connect(mapStateToProps, {toggleItem})(TodoList);
