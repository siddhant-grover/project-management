import React,{useState} from 'react';
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {signUp} from '../../redux/actions/authActions'
function SignUp(props) {
    const[state,setState]=useState({
        email:"",
        password:"",
        firstName:"",
        lastName:""
    });
function handelChange(event){
    setState((prev)=>{
        return {...prev,[event.target.id]:event.target.value}
    })
}
 
    return (
        <>
       {!(props.profileLoaded)?<form className="formC">
           <div><b>Sign Up</b></div>
            <span><label htmlFor="email">Email</label><input type="email" id="email" onChange={handelChange} /></span>
            <span><label htmlFor="password">Password</label><input type="password" id="password" onChange={handelChange}/></span>
            <span><label htmlFor="firstName">First Name </label><input type="text" id="firstName"onChange={handelChange} /></span>
            <span><label htmlFor="lastName">Last Name</label><input type="text" id="lastName" onChange={handelChange}/></span>
            <button onClick={(e)=>{ e.preventDefault();props.signUp(state)}}>Submit</button>
            {props.authError&&<p>{props.authError}</p>}
       </form>:<Redirect to="/"/>}
  
       </>
    );
}
const mapStateToProps =(state)=>{
return {
    authError:state.auth.authError,
    profileLoaded:state.profileLoaded

}
}
const mapDispatchToProps =(dispatch)=>{
return{
    signUp: (arg)=>{dispatch(signUp(arg))}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);