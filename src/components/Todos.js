import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
    return (todos.length ?
        (
            <div className="todos collection">
                {todos.map(todo => {
                    return (
                        <div className="collection-item" key={todo.id}>
                            <span onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                        </div>
                    )
                })}
            </div>
        )
        :
        (
            <p className="center">No more Todo's left!</p>
        )
    );

}
export default Todos;