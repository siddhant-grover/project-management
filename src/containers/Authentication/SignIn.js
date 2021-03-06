import React,{useState} from 'react';
import './SignIn.css'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom';
import {signIn } from '../../redux/actions/authActions';

function SignIn(props) {
    const[state,setState]=useState({
        email:"",
        password:""
    });

 function handelChange(e){
     setState((prev)=>{
         return {...prev,[e.target.id]:e.target.value}
    })
 }
//  if(props.profileLoaded===null){
//     return(<></>)
//     }
    return (

        <>
        {(props.profileLoaded)?<Redirect to="/"/>:<form className="formC">
           <div><b>Sign In</b></div>
            <span><label htmlFor="email">Email</label><input type="email" id="email" onChange={handelChange}/></span>
            <span><label htmlFor="password">Password</label><input type="password" id="password" onChange={handelChange}/></span>
            <button onClick={(e)=>{ e.preventDefault(); props.signIn(state);}}>Submit</button>
            {props.authError&&<p>Error in Sign In </p>}
       </form>}
  
       </>
    );
}
const mapSateToProps =(state)=>{
    return{
       authError: state.auth.authError,
       profileLoaded:state.profileLoaded
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        signIn:(creds)=>{dispatch(signIn(creds))},
    }
}
export default connect(mapSateToProps,mapDispatchToProps)(SignIn);