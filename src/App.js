import React from 'react';
import {connect} from "react-redux";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './App.css';

function App(props) {
	return (
		<div className="App">
			<TodoList />	
			<TodoForm />
		</div> 
	);
}

export default connect()(App);
