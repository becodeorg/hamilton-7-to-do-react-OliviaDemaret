import { useRef } from "react";

const AddTodo = ({addTodo}) => {
    const inputRef = useRef();

    const handleClick = () => {
      let inputElement = inputRef.current;
      addTodo(inputElement.value)
    }

    return(
        <div className="flex flex-col">
          <input
            className="mx-auto mt-5"
            type="text"
            placeholder="type a new todo"
            ref={inputRef}
          ></input>
          <button
            className="bg-blue-800 px-2.5 mx-auto my-5 rounded-md"
            type="button"
            onClick={handleClick}
          >
            Add Todo
          </button>
        </div>
    )
}

export default AddTodo;