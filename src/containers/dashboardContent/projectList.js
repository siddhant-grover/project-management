import React from 'react';
import './projectList.css';
import {Link} from 'react-router-dom'
function projectList(props) {
    let arr=[{id:1,title:"mario hunt",Name:"Mario Plumber"},{id:2,title:"mario hunt",Name:"Mario Plumber"}]

    function formatAMPM() {
        let date=new Date()
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
      
    
    return (
       <div className="divContainer">
           {arr.map((item)=>{
               return (
                
                 
                    <div className="mapDiv">
                        <Link to={`/project/${item.id}`} style={{textDecoration:'none',color:'inherit'}}>  
                        <p>{item.title}</p>
                        <p>Posted By {item.Name}</p>
                        <p>Today at {formatAMPM()}</p>
                        </Link>
                    </div>
                   
                         
               )
           })}
       </div>
       
    
    );
}

export default projectList;