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
    else if (action.type === 'ADD_TODO') {
        const [lastItem] = state.todos.slice(-1);
        action.todo.id = lastItem ? lastItem.id + 1 : 1;
        const todos = [...state.todos, action.todo];
        return {
            ...state,
            todos
        };
    }
    return state;
}


export default RootReducer;