import React,{useState} from 'react';

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
       <form className="formC">
           <div>Sign Up</div>
            <span><label htmlFor="email">Email</label><input type="email" id="email" onChange={handelChange} /></span>
            <span><label htmlFor="password">Password</label><input type="password" id="password" onChange={handelChange}/></span>
            <span><label htmlFor="firstName">First Name </label><input type="text" id="firstName"onChange={handelChange} /></span>
            <span><label htmlFor="lastName">Last Name</label><input type="text" id="lastName" onChange={handelChange}/></span>
            <button onClick={(e)=>{ e.preventDefault();console.log(state)}}>Submit</button>
       </form>
  
       </>
    );
}

export default SignUp;