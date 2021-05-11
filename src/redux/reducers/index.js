import projects from './projectReducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    projects:projects
})
export default rootReducer; 