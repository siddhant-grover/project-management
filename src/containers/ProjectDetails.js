import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router';

import firebase from "../config/fbConfig"
function ProjectDetails(props) {
    
    let id = useRef(useParams().id);
   
    let item = useRef({})
   useEffect(()=>{
    item.current =  firebase.firestore().collection('Projects').doc(id.current).get()
        .then(snapshot=>snapshot.data())
   },[])
            
   
   
  
    return (
      
 
        <div>
            <h2>{item.current.title} id:{id.current}</h2>
            <p>Author:{item.current.authorLastName} {item.current.authorFirstName}</p>
            <p>{item.current.content}</p>
            <p>Date : 24 july 2021</p>

        </div>
        
       
        
        
    );
}

    

export default ProjectDetails;