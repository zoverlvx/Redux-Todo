import React from "react";
import {connect} from "react-redux";

export default function Todo(props) {
	return <li style={{textDecoration: props.completed ? "line-through" : "none"}}>{props.task}</li>;
}
