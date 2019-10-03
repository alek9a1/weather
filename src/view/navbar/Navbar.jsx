import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './../home/Home';

export default class MyNavbar extends React.Component {

    render(){
  
        function Homestart() {
            return <h2><Home></Home></h2>;
        }
          
          function About() {
            return <h2>About</h2>;
          }
          
          function Users() {
            return <h2>Users</h2>;
          }

          return (
            <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/users">Users</Link>
                    </li>
                  </ul>
                </nav>
        
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/users">
                    <Users />
                  </Route>
                  <Route path="/">
                    <Homestart />
                  </Route>
                </Switch>
              </div>
            </Router>
          );
    }
}
