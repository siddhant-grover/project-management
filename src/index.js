import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import configureStore from './redux/configureStore'
import {Provider as ReduxProvider} from 'react-redux'

ReactDOM.render(
  
  <React.StrictMode>
    <ReduxProvider store={configureStore()}> {/* //we dont pass initial state to store, passing initial state here is overriding the default state parameters that we specify in our reducers  */}
    <Router>
    <App />
    </Router>
    </ReduxProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
