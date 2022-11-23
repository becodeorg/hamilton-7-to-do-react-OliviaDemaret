import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

let LSKEY = "Todo-App";

function App() {
  let initialTodos = [
    {
      title: "First Todo",
      done: false,
      id: uuidv4(),
    },
    {
      title: "Last Todo",
      done: true,
      id: uuidv4(),
    },
  ];

  const [todos, setTodos] = useState(() => {
    initialTodos = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
    return initialTodos || [];
  });

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), title: todo, done: false }]);
  };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <header className="App-header text-center flex flex-col">
        <h1 className="text-4xl font-bold my-5">My Todo App</h1>
        <hr></hr>
        <AddTodo addTodo={addTodo} />
        <hr></hr>
        <TodoList todos={todos} setTodos={setTodos} />
      </header>
    </div>
  );
}

export default App;
