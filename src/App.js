import Nav from './containers/Nav/Nav'
import {Route,Switch} from 'react-router-dom'
import Dashboard from './containers/Dashboard';

import ProjectDetails from './containers/ProjectDetails';
import CreateProject from './containers/CreateProject';
import SignIn from './containers/Authentication/SignIn';
import SignUp from './containers/Authentication/SignUp';


function App() {
  return (
    <>
    <Nav/>
    <Switch>
     <Route exact path="/" component={Dashboard}/>
     <Route path="/project/:id" component={ProjectDetails}/>
     <Route path="/create" component={CreateProject}/>
     <Route path="/signin" component={SignIn}/>
     <Route path="/signup" component={SignUp}/>

    </Switch>
    </>
  );
}

export default App;
