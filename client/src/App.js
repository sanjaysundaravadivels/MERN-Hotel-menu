import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App1 from "./menu/App1";
import Homepage from "./Homepage";
import About from "./About";
import Contact from "./Contact";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/menu" component={App1} />
      </Switch>
    </Router>
  );
};
export default App;
