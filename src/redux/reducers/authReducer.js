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
        case 'SIGNUP_SUCCESS':
            console.log('sigUP SUCCESS')
            return {...state, authError:null};
        case 'SIGNUP_ERROR':
            console.log('SIGN UP ERORR')
            return {...state, authError:action.err.message};
        default:
            return state;
    }
}

export default authReducer;

