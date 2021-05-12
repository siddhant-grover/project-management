import React from 'react';
import './projectList.css';
import {Link} from 'react-router-dom'

function projectList(props) {
   // let arr=[{id:1,title:"mario hunt",Name:"Mario Plumber"},{id:2,title:"mario hunt",Name:"Mario Plumber"}]

   
      //console.log(props.Data)
    
    return (
       <div className="divContainer">
           {props.Data&&props.Data.map((item)=>{
               return (
                   
                    <div className="mapDiv" key={item.id}>
                        <Link to={`/project/${item.id}`} style={{textDecoration:'none',color:'inherit'}}>  
                        <p>{item.title}</p>
                        <p>Posted By {item.authorFirstName} {item.authorLastName}</p>
                        <p>Today at 3rd Sep 2021</p>
                        </Link>
                    </div>
                   
                         
               )
           })}
           
       </div>
       
    
    );
}

export default projectList;