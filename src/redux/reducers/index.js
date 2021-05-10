import projects from './projectReducer';
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    projects
})
export default rootReducer;