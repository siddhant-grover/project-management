import React from 'react'
import ProjectList from './dashboardContent/projectList'
import Notification from './dashboardContent/notification'
import './Dashboard.css'
function Dashboard(){
    return(
        <>
        <div className="dash">
        <ProjectList/>
        <Notification/>
        </div>
        </>
    )
}
export default Dashboard