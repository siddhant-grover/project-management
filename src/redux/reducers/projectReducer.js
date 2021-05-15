
import initialState from './initialState'
export default function projectReducer(state=initialState.projects,action){
    switch(action.type){
        case 'ADD_PROJECT':
            return [...state,action.project]
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.error);
            return state;
        case 'LOAD_PROJECTS':
            return action.projects
        
        default:
            return state;
        
    }
}