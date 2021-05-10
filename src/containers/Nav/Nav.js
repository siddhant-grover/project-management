
import React from "react";
import './Nav.css'
import {NavLink} from 'react-router-dom'

import SignedInLinks from '../../components/signedInLinks'
import SignedOutLinks from '../../components/signedOutLinks'

 function Nav(){
    return(
        <>
        <nav className="nav ">
            <div><NavLink to="/" style={{textDecoration:'none',color:'aqua'}}>Project Management</NavLink></div>
          {true ?<SignedInLinks/>:<SignedOutLinks/>}
        </nav>
        </>
    )
}

export default Nav;