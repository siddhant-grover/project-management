
import initialState from './initialState'
export default function projectReducer(state=initialState.projects,action){
    switch(action.type){
        case 'ADD_PROJECT':
            return [...state,action.project]
        default:
            return state;
    }
}