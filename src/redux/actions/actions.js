
export const addCounter = (dispatch) => {
    return {
        testme: () => dispatch({ type: "Add Counter" })
    }
}
export const updateLoginState = (dispatch) => {
    return {
        updateRoutes: (data) => dispatch({ type: "update Login State" ,data})
    }
}
export const logoutUser = (dispatch) => {
    return {
        logout: () => dispatch({ type: "logoutUser" })
    }
}