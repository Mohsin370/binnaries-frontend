const initState = {
    counter: 0,
}

const loginState = {
    isLoggedIn : false,
}

export const loginReducer = (state = loginState, action) => {
    if (action.type === "update Login State") {
        console.log(action.data)
        localStorage.setItem("token",action.data.token);
        let newState = true;
        return {
            isLoggedIn: newState,
        }
    }
    return state;
}



export const LogoutReducer = (state = loginState, action) => {
    if(action.type === "logoutUser"){
      localStorage.removeItem("token")
      let newState = false;
      return {
          isLoggedIn: newState,
      }
    }
    return state;
}




export const signUpReducer = (state = initState, action) => {
    return state;
}
