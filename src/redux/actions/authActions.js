
import firebase from "../../config/fbConfig"
function profileLoadedSuccess(){
    return ({type:'PROFILE_LOADED'})
}
function profileLoadedFailure(){
    return ({type:'PROFILE_NOT_LOADED'})
}


export function signIn(creds){
    return function(dispatch,getState){
    firebase.auth().signInWithEmailAndPassword(
        creds.email,creds.password
    ).then((userCreds)=>{
        console.log('login ka success')
        //console.log(userCreds)
        dispatch({type:'LOGIN_SUCCESS'})
        
    })
    .catch((err)=>{
        console.log("login ka failure ")
       // console.log(err)
        dispatch({type:'LOGIN_ERROR',err})
    })
}
}

export function authChange(){
   return  function(dispatch){
    firebase.auth().onAuthStateChanged( //on asuth state change , login , logout this func fires automatically automatically  we only iitialize it in thr Nav 
       // onAuthStateChanged//listens for uthentication status changes , when there are , it is gonna fire a function for us

        user=>{ //get user back if user has logged in , if logged out , user will be null.
            if(user){
                //console.log(user)
                console.log('authSate change check ka success')
                dispatch(profileLoadedSuccess())
            }
            else{
                console.log('authSate change check ka faliure')
                dispatch(profileLoadedFailure())
            }

        }
    )
 
}
}
export function logout(){
    return function(dispatch){
    firebase.auth().signOut()
    .then(()=>{
        console.log("logOut")
        
    })
    .catch((err)=>{
        //error
    })
}
}

