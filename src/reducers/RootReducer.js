let initState = {
    todos: [
        { id: 1, content: "Learn React" },
        { id: 2, content: "Rewatch- The Force Awakens" }
    ]
}

const RootReducer = (state = initState, action) => {
    return state;
}

export default RootReducer;