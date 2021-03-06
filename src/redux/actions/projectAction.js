import firebase from "../../config/fbConfig"
export function addProject(project){
    return function(dispatch,getState){ //getState() returns state of our whole store, access to dispatch due to thunk
        //can perform async calls
        //const firestore = getFirestore();//refrence to our firestore db
        let projectPassed = { //Projects collection in our DB , we pass an object to add (this obj represents a document that we will be adding to that collection)
            ...project,
            authorFirstName:localStorage.getItem('firstName'),
            authorLastName:localStorage.getItem('lastName'),
            authorId:'123',
            createdAt:Date.now()

        }
        firebase.firestore().collection('Projects').add({ //Projects collection in our DB , we pass an object to add (this obj represents a document that we will be adding to that collection)
           ...projectPassed
        }).then((savedProject)=>{
            //if(savedProject.exists)
            console.log(savedProject.id)
            
            //dispatch({type:'ADD_PROJECT',project:{...projectPassed,id:savedProject.id}}) // as we r using .onSnapshot to automatic update our db
        }).catch((error)=>{
            dispatch({type:'CREATE_PROJECT_ERROR',error:error})
        })        

    }
}
export function loadProjects(){
    return function(dispatch){
        firebase.firestore().collection('Projects')
        .onSnapshot((items) => {    //runs automatically on update update 
            let projects = []
            console.log('run')
    items.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
            projects = [...projects,{id:doc.id,...doc.data()}]
         //   console.log("projects")
         //console.log(projects);
         

    });
    dispatch({type:'LOAD_PROJECTS',projects:projects})
    
});
    }
}

