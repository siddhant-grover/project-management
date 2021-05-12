import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

import firebase from "../config/fbConfig"
function ProjectDetails(props) {
    
    let id = useRef(useParams().id);
   
    let [item,setItem] = useState({})

   useEffect(()=>{
  
        firebase.firestore().collection('Projects').doc(id.current).get()
        .then(snapshot=>setItem(snapshot.data())).catch(error=>{throw error })
     
   
        
   },[])
   console.log("d")
    console.log(item)
    console.log(id)
    if(!(Object.keys(item).length===0)){
        return(
                <div>
                    <h2>{item.title} id:{id.current}</h2>
                    <p>Author:{item.authorLastName} {item.authorFirstName}</p>
                    <p>{item.content}</p>
                    <p>Date : 24 july 2021</p>

                </div>
        )
    }
    else{
        return (
        <p>Loading.....</p>
        )
    }

}

    

export default ProjectDetails;