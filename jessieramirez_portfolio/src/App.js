import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LandingPage  from './views/landingpage';
import AboutMePage from './views/aboutmepage';
import ProjectsPage from './views/projectspage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ LandingPage }/>
          <Route exact path="/about" component={ AboutMePage }/>
          <Route exact path="/projects" component={ ProjectsPage }/>
        </div>
      </Router>
    );
  }
}

export default App;
