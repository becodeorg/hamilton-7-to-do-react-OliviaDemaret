const TodoList = ({todos}) => {
    return(
        <div>
        <h2 className="m-5">Todos</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input
                            className="mx-2.5"
                            type="checkbox"
                            name={todo.title}
                            value={todo.title}
                            checked={todo.done}
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