import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import { addProject, loadProjects } from '../redux/actions/projectAction';
import {useHistory} from 'react-router-dom'
function CreateProject(props) {
let history = useHistory()
const [state1,setState]=useState({
    title:"",
    content:""
});

useEffect(()=>{
    if(props.projects.length===0)
    props.loadProjects()
   
},[])
function handelOnChange(e){
    setState((prev)=>{
        return {...prev,[e.target.id]:e.target.value}
    })
}

// if(!props.profileLoaded){
//     history.push('/signin') //or use Redirect
//     return (<></>)
// }

    return (
        <div>
            <form className="formC">
            <div>Create Project</div>
            <div>
                <label htmlFor="projectTitle">Project Title</label>
                    <input type="text" id="title" onChange={handelOnChange}/>
                    </div>
            <div>
                <label htmlFor="projectContent">Project Content</label>
                <input type="text" id="content"onChange={handelOnChange} />
                </div>
                <button onClick={(e)=>{
                    e.preventDefault()
                    console.log(state1)
                    props.addProject(state1)

                }}>Create</button>
            </form>
            <p>{JSON.stringify(props.projects)}</p>
            
        </div>
    );
}

const mapStateToProps =(state)=>{
    return{
        projects:state.projects,
        profileLoaded:state.profileLoaded
    }
    
}
const mapDispatchToProps =(dispatch)=>{
    return{
       addProject: (project)=>{
           dispatch(addProject(project))
       },
       loadProjects : ()=>{
           dispatch(loadProjects())
    }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);

