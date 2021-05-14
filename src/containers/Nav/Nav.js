
import React, { useEffect, useRef} from "react";
import './Nav.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import{authChange} from '../../redux/actions/authActions'
import SignedInLinks from '../../components/signedInLinks'
import SignedOutLinks from '../../components/signedOutLinks'

function Nav({authChange,profileLoaded,...props}){
  const authChangeRef = useRef(authChange)
  
useEffect(()=>{
  console.log("Nav UseEFFECT")
  authChangeRef.current()
 
},[])

if(profileLoaded===null){
return(<></>)
}
    return(
        <>
       <nav className="nav ">
            <div><NavLink to="/" style={{textDecoration:'none',color:'aqua'}}>Project Management</NavLink></div>
         {profileLoaded?<SignedInLinks/>:<SignedOutLinks/>}
        </nav>
        
        </>
    )
    }
function mapStateToProps(state){
    console.log(state) //prints whenever state changes + 1st time on 1st render(the initial state)//but props wont change as nothing returned in the object below
    return{
      profileLoaded:state.profileLoaded
    }
}
function mapDispatchToProps(dispatch){
return {
  authChange:()=>{dispatch(authChange())}
}
}



export default connect(mapStateToProps,mapDispatchToProps)(Nav);