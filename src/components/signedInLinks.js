import React from 'react';
import {NavLink} from 'react-router-dom'
import "./signedInLinks.css"
import {connect} from 'react-redux'
import {logout} from '../redux/actions/authActions'
function SignedInLinks(props){

return(
            <ul>
            <li><NavLink to='/create' className="link">New Project</NavLink></li>
            <li><NavLink to='/' className="link" onClick={()=>{props.logout()}}>Log Out</NavLink></li>
            <li style={{fontSize:'30px'}}>SG</li>
      
        </ul>

)
}
const mapSateToProps=(state)=>{
    return{
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logout:()=>{dispatch(logout())}
    }
}
export default connect(mapSateToProps,mapDispatchToProps)(SignedInLinks);