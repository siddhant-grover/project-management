
import React from 'react';
import {NavLink} from 'react-router-dom'
import "./signedInLinks.css"
function SignedOutLinks(){

return(
            <ul>
                <li><NavLink to='/signup' className="link">Signup</NavLink></li>
                <li><NavLink to='/signin' className="link">Signin</NavLink></li>
            </ul>

)
}
export default SignedOutLinks;