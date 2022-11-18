import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header text-center flex flex-col">
        <h1 className="text-4xl font-bold my-5">My Todo App</h1>
        <hr></hr>
        <div className="flex flex-col">
          <input
            className="mx-auto mt-5"
            type="text"
            placeholder="type a new todo"
          ></input>
          <button
            className="bg-blue-800 px-2.5 mx-auto my-5 rounded-md"
            type="button"
          >
            Add Todo
          </button>
        </div>
        <hr></hr>
        <div>
          <h2 className="m-5">Todos</h2>
          <input
            className="mx-2.5"
            type="checkbox"
            id="learnReact"
            name="Learn React"
            value="Learn React"
          ></input>
          <label className="mx-2.5" for="Learn React">
            {" "}
            Learn React
          </label>
          <input
            className="mx-2.5"
            type="checkbox"
            id="beAwesome"
            name="Be Awesome"
            value="Be Awesome"
          ></input>
          <label for="Be Awesome"> Be Awesome!</label>
        </div>
      </header>
    </div>
  );
}

export default App;
