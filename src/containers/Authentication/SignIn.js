import React,{useEffect, useState} from 'react';
import './SignIn.css'

function SignIn(props) {
    useEffect(()=>{
        console.log("printed")
    })
    const [state,setState]=useState(0);
    
    return (

        <>
     
       <form className="formC">
            <span><label>name:</label><input type="text" /></span>
            <span><label>name:</label><input type="text"/></span>
            <span><label>name:</label><input type="text"/></span>
            <button>Submit</button>
       </form>
  
       </>
    );
}

export default SignIn;