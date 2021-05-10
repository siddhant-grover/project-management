import React from 'react';
import {NavLink} from 'react-router-dom'
import "./signedInLinks.css"
function SignedInLinks(){

return(
            <ul>
            <li><NavLink to='/create' className="link">New Project</NavLink></li>
            <li><NavLink to='/' className="link">Log Out</NavLink></li>
            <li style={{fontSize:'30px'}}>SG</li>
      
        </ul>

)
}
export default SignedInLinks;