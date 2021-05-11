import React, { useEffect } from 'react'
import {loadProjects} from '../redux/actions/projectAction'
import ProjectList from './dashboardContent/projectList'
import Notification from './dashboardContent/notification'
import './Dashboard.css'
import {connect} from 'react-redux'
function Dashboard(props){

    useEffect(()=>{
        if(props.projects.length===0){
        //props.loadProjects()
        console.log(props.loadProjects())
        }
    },[])
    
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
    loadProjects: ()=>{dispatch(loadProjects())}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)