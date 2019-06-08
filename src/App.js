import React, {component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import 'bootstrap';
// import $ from "jquery";


import Homepage from './home/Homepage';
import NavBar from '../src/NavBar';
import COC from '../src/coc';
import streams from '../src/streams';
import admins from '../src/admins';







function App() {
  return (
    <div>  

        <React.Fragment>
          <NavBar/>
          <Router>
            <Switch>     

            <Route exact path='/' component={Homepage}/>
            <Route exact path='/COC' component={COC}/>
            <Route exact path='/streams' component={streams}/>
            <Route exact path='/admins' component={admins}/>

            </Switch>
          </Router>
        </React.Fragment>
        

    </div>
  );
}

export default App;
