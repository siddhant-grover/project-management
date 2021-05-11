import {createStore,applyMiddleware} from "redux"
import rootReducer from "./reducers"
import thunk from 'redux-thunk'

function configureStore(initialState){


    return createStore(
    rootReducer,//or single reducer is passed 
    initialState,
    applyMiddleware(thunk)
    )
}

export default configureStore;