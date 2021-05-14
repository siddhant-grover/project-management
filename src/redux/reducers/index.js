import projects from './projectReducer';
import {combineReducers} from "redux";
import profileLoaded from './profileLoaded'
import authReducer from './authReducer'
const rootReducer = combineReducers({
    projects:projects,
    profileLoaded:profileLoaded,
    auth:authReducer
})
export default rootReducer; 