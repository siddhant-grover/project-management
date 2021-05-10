import React, { useState } from 'react';

function CreateProject(props) {

const [state,setState]=useState({
    projectTitle:"",
    projectContent:""
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
                    <input type="text" id="projectTitle" onChange={handelOnChange}/>
                    </div>
            <div>
                <label htmlFor="projectContent">Project Content</label>
                <input type="text" id="projectContent"onChange={handelOnChange} />
                </div>
                <button onClick={(e)=>{
                    e.preventDefault()
                    console.log(state)

                }}>Submit</button>
            </form>
            
        </div>
    );
}

export default CreateProject;

