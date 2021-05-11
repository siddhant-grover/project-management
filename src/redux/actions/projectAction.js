export function addProject(project){
    return function(dispatch,getState){ //getState() returns state of our whole store, access to dispatch due to thunk
        //can perform async calls
        dispatch({type:'ADD_PROJECT',project:project})

    }
}