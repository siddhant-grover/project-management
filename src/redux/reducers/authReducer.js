import initialState from './initialState'
 function authReducer(state=initialState.auth,action){  //{authError:null} //failed sign in pe "error" , else null
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {...state,authError:null};
        case 'LOGIN_ERROR':
        return {...state,authError:'Error in SignIN '}
    
        case 'SIGN_OUT_SUCCESS':
            console.log('signout')
            return state;
        default:
            return state;
    }
}

export default authReducer;

