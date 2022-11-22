const AddTodo = () => {
    return(
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
    )
}

export default AddTodo;