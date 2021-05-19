import React, { useEffect ,useRef} from 'react'
import {loadProjects} from '../redux/actions/projectAction'
import ProjectList from './dashboardContent/projectList'
import Notification from './dashboardContent/notification'
import './Dashboard.css'
import {connect} from 'react-redux'

import {Redirect} from 'react-router-dom'

function Dashboard(props){
let ref = useRef()
    ref.current = {length:props.projects.length,load:props.loadProjects}
    useEffect(()=>{
        if(ref.current.length===0){
        
        console.log('dashboard ka USEEffect')
        ref.current.load()
        }
        
    },[])
   
    if(props.profileLoaded===null){
        return(<></>)
    }
    return(
        <>
      
            {props.profileLoaded?<> 
            <div className="dash">
            <ProjectList Data={props.projects}/>
            <Notification/>
            </div>
            </>:<Redirect to='/signin'/>
            }
     
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





