import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import 'bootstrap';
import $ from "jquery";


import Homepage from './home/Homepage';
import NavBar from '../src/NavBar';







function App() {
  return (
    <div>  

        <React.Fragment>
          <NavBar/>
          <Router>
            <Switch>     

            <Route exact path='/' component={Homepage}/>
            {/* <Route exact path='/COC' component={COC}/> */}

            </Switch>
          </Router>
        </React.Fragment>
        

    </div>
  );
}

export default App;
