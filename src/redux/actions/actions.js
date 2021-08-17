
export const addCounter = (dispatch) => {
    return {
        testme: () => dispatch({ type: "Add Counter" })
    }
}
export const updateLoginState = (dispatch) => {
    return {
        updateRoutes: (data) => dispatch({ type: "LoginUser" ,data})
    }
}
export const logoutUser = (dispatch) => {
    return {
        logout: () => dispatch({ type: "logoutUser" })
    }
}