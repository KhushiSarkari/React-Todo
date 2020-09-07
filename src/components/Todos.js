import React from 'react';
import {connect} from 'react-redux';

const Todos = ({todos}) => {

    return (todos.length ?
        (
            <div className="todos collection">
                {todos.map(todo => {
                    return (
                        <div className="collection-item" key={todo.id}>
                            <span >{todo.content}</span>
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

export default connect(mapStateToProps)(Todos);