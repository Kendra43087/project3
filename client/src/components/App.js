import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login";
import Web from "./web";
import Blog from "./blog";
import Nav from "./Nav";
// import Mongo from "./mongo"

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/web" component={Web} />
        <Route exact path="/blog" component={Blog} />
      {/* <Route exact path="/mongo" component={Mongo}/> */}
      
      </Switch>
    </div>
  </Router>
);

export default App;
