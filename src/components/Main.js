import React from 'react';
import { Switch, Route } from "react-router-dom";
import Projects from './Projects';
import About from './About';

function Main() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={About} />
        <Route path="/Projects" component={Projects} />
      </Switch>
    </div>
  )
}

export default Main;
