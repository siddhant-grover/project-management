import React from 'react';
import { useParams } from 'react-router';

function ProjectDetails(props) {
    let {id} = useParams();
   let arr =[{title:"title",content:"constent",author:"Name",date:'random for now'}] //selected by incoming id 
   console.log(props.project)
    return (
        <div>
            <h2>{arr[0].title} id:{id}</h2>
            <p>{arr[0].content}</p>
            <p>{arr[0].date}</p>

        </div>
    );
}

export default ProjectDetails;