import initialState from "./initialState";

function profileLoaded(state=initialState.profileLoaded,action){
    switch(action.type){
        case 'PROFILE_LOADED':
            return true
        case 'PROFILE_NOT_LOADED':
            return false
        default:
            return state

    }
}
export default profileLoaded;