import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './Components/Other/Layout';
import AdminPortal from '../src/Components/Pages/AdminPortal'
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import AdminLogin from './Components/Pages/AdminLogin';
import Post from './Components/Pages/Post';


class App extends Component {
  render() {
    return (
      <div className="appcontainer">
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/"><Post /></Route>
              <Route exact path="/register"><Register /></Route>
              <Route exact path="/adminportal"><AdminPortal /></Route>
              <Route exact path="/login"><Login /></Route>
              <Route exact path="/adminlogin"><AdminLogin /> </Route>
            </Switch>
          </Layout>
           </Router>
      </div>
    );
  }

}

export default App;
