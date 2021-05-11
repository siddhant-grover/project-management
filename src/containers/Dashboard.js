import React from 'react'
import ProjectList from './dashboardContent/projectList'
import Notification from './dashboardContent/notification'
import './Dashboard.css'
import {connect} from 'react-redux'
function Dashboard(props){
    
    return(
        <>
        <div className="dash">
        <ProjectList Data={props.projects}/>
        <Notification/>
        </div>
        </>
    )
}
let mapStateToProps =(state)=>{
return{
    projects:state.projects  //component will rerender if 'projects' part of state changes
}
}
let mapDispatchToProps=(dispatch)=>{
return{

}
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)