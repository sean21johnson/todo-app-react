import React, { useState, useEffect } from "react";

import Form from "./Form";
import TodoItem from "./TodoItem";

import "./App.css";

function App() {
	const [currentTodoList, setCurrentTodoList] = useState(
		JSON.parse(localStorage.getItem("todos")) !== null
			? JSON.parse(localStorage.getItem("todos"))
			: []
	);

	useEffect(() => {
		displayInitialTodos();
	}, [currentTodoList]);

	const displayInitialTodos = () => {
		if (currentTodoList !== null) {
			currentTodoList.map((todo) => addNewTodo(todo));
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			text: e.target.todo.value,
			completed: false,
		};

		addNewTodo(newTodo);
		e.target.todo.value = "";
	};

	const addNewTodo = (todo) => {

		if (currentTodoList.length === 0) {
			const theList = [todo];
      setCurrentTodoList(theList)
		}

    else if (currentTodoList.indexOf(todo) === -1) {
      const theList = [...currentTodoList, todo];
      setCurrentTodoList(theList)
    } 

    updateLS();

	};

  const handleRightClick = (todo) => {
    const theList = [...currentTodoList];

    const targetIndex = theList.indexOf(todo);

    theList.splice(targetIndex, 1);

    setCurrentTodoList(theList);

    updateLS();
    
  }

  const handleLeftClick = (todo) => {
    const theList = [...currentTodoList];

    const targetIndex = theList.indexOf(todo);

    theList[targetIndex].completed ? 
    theList[targetIndex].completed = false :
    theList[targetIndex].completed = true;

    setCurrentTodoList(theList);

    updateLS();
  }

	const updateLS = () => {
		const storageTodoList = JSON.stringify(currentTodoList);
		localStorage.setItem("todos", storageTodoList);
	};

	// Use effect to pass the initial currentTodoList items through the addNewTodo method

	return (
		<div className="App">
			<h1>todos</h1>

			<section className="todosEl">

				<Form onFormSubmit={handleFormSubmit} />

				<ul className="todosList">
					{currentTodoList.map((todo, i) => {
						 return <TodoItem key={i} todo={todo} onLeftClick={handleLeftClick} onRightClick={handleRightClick} />;
					})}
				</ul>
        
			</section>

			<section className="instructions">
				<p>Left click to toggle complete</p>
				<p>Right click to delete the todo</p>
			</section>
		</div>
	);
}

export default App;
