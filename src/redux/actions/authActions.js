
import firebase from "../../config/fbConfig"
function profileLoadedSuccess(){
    return ({type:'PROFILE_LOADED'})
}
function profileLoadedFailure(err){
    return ({type:'PROFILE_NOT_LOADED',err:err})
}


export function signIn(creds){
    return function(dispatch,getState){
    firebase.auth().signInWithEmailAndPassword(
        creds.email,creds.password
    ).then((userCreds)=>{
        console.log(userCreds)
        dispatch({type:'LOGIN_SUCCESS'})
    })
    .catch((err)=>{
        console.log("sorry matey in actions")
        console.log(err)
        dispatch({type:'LOGIN_ERROR',err})
    })
}
}

export function authChange(){
   return  function(dispatch){
    firebase.auth().onAuthStateChanged( //on asuth state change , login , logout this func fires 
        user=>{ //get user back if user has logged in , if logged out , user will be null.
            if(user){
                console.log(user)
                dispatch(profileLoadedSuccess())
            }
            else{
                dispatch(profileLoadedFailure())
            }

        }
    )
 
}

}

