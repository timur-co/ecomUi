import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./components/Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" render={() => <div>Login</div>}></Route>
        <Route path="/" component={Home} />

        {/*private Route*/}
        <Route path="/dashboard" render={() => <div>dashboard</div>}></Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
