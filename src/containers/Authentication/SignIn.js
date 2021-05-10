import React,{useState} from 'react';
import './SignIn.css'

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

    return (

        <>
       <form className="formC">
           <div>Sign In</div>
            <span><label htmlFor="email">Email</label><input type="email" id="email" onChange={handelChange}/></span>
            <span><label htmlFor="password">Password</label><input type="password" id="password" onChange={handelChange}/></span>
            <button onClick={(e)=>{ e.preventDefault();console.log(state)}}>Submit</button>
       </form>
  
       </>
    );
}

export default SignIn;