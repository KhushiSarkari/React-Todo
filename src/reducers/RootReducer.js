let initState = {
    todos: [
        { id: 1, content: "Learn React" },
        { id: 2, content: "Rewatch- The Force Awakens" }
    ]
}

const RootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_TODO') {
        const todos = state.todos.filter(todo => todo.id !== action.id);
        return {
            ...state,
            todos
        };
    }
    return state;
}

export default RootReducer;