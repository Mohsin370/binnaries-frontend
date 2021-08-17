const initState = {
    counter: 0,
}

const loginState = {
    isLoggedIn: false,
}

export const AuthReducer = (state = loginState, action) => {
    if (action.type === "LoginUser") {
        localStorage.setItem("userData", JSON.stringify(action.data));
        let newState = true;
        return {
            isLoggedIn: newState,
        }
    } else if (action.type === "logoutUser") {
        localStorage.removeItem("userData")
        let newState = false;
        return {
            isLoggedIn: newState,
        }
    }
    let userData = JSON.parse(localStorage.getItem("userData"))
    if (userData) {
        return {
            isLoggedIn: true,
        }
    } else {
        return {
            isLoggedIn: false,
        }
    }
}



export const LogoutReducer = (state = loginState, action) => {

    return state;
}




export const signUpReducer = (state = initState, action) => {
    return state;
}
