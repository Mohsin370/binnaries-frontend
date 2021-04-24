const initState = {
    counter: 0,
}

export const loginReducer = (state = initState, action) => {
    if (action.type === "Add Counter") {
        let newState = state.counter + 1;
        return {
            counter: newState,
        }
    }
    return state;
}

export const signUpReducer = (state = initState, action) => {
    return state;
}
