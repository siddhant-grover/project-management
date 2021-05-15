
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
        dispatch({type:'SIGN_OUT_SUCCESS'})
    })
    .catch((err)=>{
        //error
    })
}
}
export function signUp(newUser){
    return function(dispatch,getState){
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password) //signed up a new user 
        .then(usersCreds=>{
            if(usersCreds.user){
                console.log("READ "+JSON.stringify(usersCreds.user))
               return firebase.firestore().collection('Users').doc(usersCreds.user.uid).set({ //now we wanna store some additional info ,that auth service dont store for us ,usig doc we set id of the added doc to uid of the signedUp user 
                    firstName:newUser.firstName,
                    lastName:newUser.lastName,
                    initials:newUser.firstName[0]+newUser.lastName[0]
                  
                })
                // dispatch({type:'SIGNUP_SUCCESS'}) 
            }
        })
        .then(()=>{ //upar returned promise pe .then() , but koi value nahi mili .set ke resolve pe 
            console.log("success in")
            dispatch({type:'SIGNUP_SUCCESS'}) 
        })
        .catch((err)=>{
            console.log(err.message)
            dispatch({type:'SIGNUP_ERROR',err})
        })

    }
}


