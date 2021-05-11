import React from 'react';

function notification(props) {
   let arr1=[{id:1,notification:"1st user added"},{id:2,notification:"2nd user added"}]
    return (
        <div>
            <h1>Notification</h1>
            {arr1.map((item)=>{
               return (
                    <p key={item.id}>{item.notification}</p> 
               )
           })}
        </div>
    );
}

export default notification;