const initialState = {
    authError : null
}
export const  authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS' : 
            return {...state, authError:null}
        case 'LOGIN_ERROR' : 
             return {...state, authError:'Log in Error'}    
        case 'SIGNOUT_SUCESS' :
            return state
        case 'SIGNUP_SUCCESS' : 
            return {...state, authError:null}
        case 'SIGNUP_ERROR' :
            return {...state, authError:action.err.message}
        default : 
          return state
    }
}