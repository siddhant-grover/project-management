import React from 'react';

function notification(props) {
   let arr1=[{notification:"user added"},{notification:"user added"}]
    return (
        <div>
            <h1>Notification</h1>
            {arr1.map((item)=>{
               return (
                     <>
                        <p>{item.notification}</p>
                       </> 
               )
           })}
        </div>
    );
}

export default notification;