import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    };
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        });
    }
    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo">Add a new todo:</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange} />
                </form>

            </div>
        );
    }
}
export default AddTodo;