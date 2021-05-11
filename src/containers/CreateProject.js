import React, { useState } from 'react';
import {connect} from 'react-redux'
import { addProject } from '../redux/actions/projectAction';

function CreateProject(props) {

const [state1,setState]=useState({
    title:"",
    content:""
});

function handelOnChange(e){
    setState((prev)=>{
        return {...prev,[e.target.id]:e.target.value}
    })
}

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
        projects:state.projects
    }
    
}
const mapDispatchToProps =(dispatch)=>{
    return{
       addProject: (project)=>{
           dispatch(addProject(project))
       } 
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject);

