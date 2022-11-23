const TodoList = ({todos, setTodos}) => {
    const handleChange = (id) => {
        const newTodo = todos.map((todo) => {
          if (todo.id === id) {
            todo.done = !todo.done;
          }
          return todo;
        });
    
        setTodos(newTodo);
      };
    return(
        <div>
        <h2 className="m-5">Todos</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            className="mx-2.5"
                            type="checkbox"
                            id={todo.id}
                            name={todo.title}
                            value={todo.title}
                            checked={todo.done}
                            onChange={() => {
                                handleChange(todo.id);
                              }}
                        ></input>
                        <label className="mx-2.5" htmlFor={todo.title}>
                            {todo.title}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList