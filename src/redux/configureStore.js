import {createStore,applyMiddleware,compose} from "redux"
import rootReducer from "./reducers"
import thunk from 'redux-thunk'


function configureStore(initialState){
    const composeEnhancer =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose ;


    return createStore(
    rootReducer,//or single reducer is passed 
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    )
}

export default configureStore;