import React, { useEffect } from 'react'
import {loadProjects} from '../redux/actions/projectAction'
import ProjectList from './dashboardContent/projectList'
import Notification from './dashboardContent/notification'
import './Dashboard.css'
import {connect} from 'react-redux'

import {useHistory} from 'react-router-dom'

function Dashboard(props){
let history = useHistory()
    useEffect(()=>{
        if(props.projects.length===0){
        //props.loadProjects()
        console.log('dashboard ka USEEffect')
        props.loadProjects()
        }
    },[props])
    if(!props.profileLoaded){
        history.push('/signin') //or use Redirect
        return (<></>)
    }
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
    projects:state.projects,  //component will rerender if 'projects' part of state changes
    profileLoaded:state.profileLoaded
}
}
let mapDispatchToProps=(dispatch)=>{
return{
    loadProjects: ()=>{dispatch(loadProjects())}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)