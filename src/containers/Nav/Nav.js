
import React, { useEffect } from "react";
import './Nav.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import{authChange} from '../../redux/actions/authActions'
import SignedInLinks from '../../components/signedInLinks'
import SignedOutLinks from '../../components/signedOutLinks'

function Nav(props){
useEffect(()=>{
  console.log("Nav UseEFFECT")
  props.authChange()
  
},[])

    return(
        <>
        <nav className="nav ">
            <div><NavLink to="/" style={{textDecoration:'none',color:'aqua'}}>Project Management</NavLink></div>
          <SignedInLinks/><SignedOutLinks/>
        </nav>
        </>
    )
    }
function mapStateToProps(state){
    //console.log(state) //prints whenever state changes + 1st time on 1st render(the initial state)//but props wont change as nothing returned in the object below
    return{

    }
}
function mapDispatchToProps(dispatch){
return {
  authChange:()=>{dispatch(authChange())}
}
}



export default connect(mapStateToProps,mapDispatchToProps)(Nav);