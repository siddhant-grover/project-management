import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom'
import "./signedInLinks.css"
import {connect} from 'react-redux'
import {logout,getCurrentUserData} from '../redux/actions/authActions'


function SignedInLinks(props){
    const [state,setState] =useState(localStorage.getItem("initials"));
    useEffect(()=>{
    
        console.log('props.getInitials()') 
    
           props.getCurrentUserData().then((res)=>{console.log(res);setState(localStorage.getItem("initials"))})
           //setState(localStorage.getItem("initials"))
    },[props])
  
    
   
return(
            <ul>
            <li><NavLink to='/create' className="link">Add New Project</NavLink></li>
            <li><NavLink to='/' className="link" onClick={()=>{props.logout()}}>Log Out</NavLink></li>
            {(state)?<li style={{fontSize:'30px'}}>{state}</li>:<li style={{fontSize:'30px'}}></li>}
        </ul>

)
}
const mapSateToProps=(state)=>{
    return{
        profileLoaded:state.profileLoaded
    }
}
const mapDispatchToProps={ //object syntax , so that we can chain .then to the returned promise from getInitials thunk in authActions

        logout,
        getCurrentUserData
  
}
// const mapDispatchToProps=(dispatch)=>{
// return{
//         logout:()=>{dispatch(logout())},
//         getInitials:()=>{dispatch(getInitials)}
// }
  
// }
export default connect(mapSateToProps,mapDispatchToProps)(SignedInLinks);