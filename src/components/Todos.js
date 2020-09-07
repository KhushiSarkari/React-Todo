import React from 'react';
import {connect} from 'react-redux';
import { deleteTodoAction } from "../actions/TodoActions";

const Todos = ({todos,deleteTodo}) => {

    return (todos.length ?
        (
            <div className="todos collection">
                {todos.map(todo => {
                    return (
                        <div className="collection-item" key={todo.id}>
                            <span onClick={() => {deleteTodo(todo.id)} } >{todo.content}</span>
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

const mapStateToProps=(state)=>{
    return {
        todos: state.todos
      }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        deleteTodo : (id) => dispatch(deleteTodoAction(id))
      }
}

export default connect( mapStateToProps, mapDispatchToProps )(Todos);