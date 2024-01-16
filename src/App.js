/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Store from "./components/Store";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./components/Product";

function App() {


  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={(props) => (
            <Store/>
          )}
        >
        </Route>
          <Route
            path="/product/:id"
            component={(props) => <Product {...props} />}
          />
      </Switch>
    </Router>
  );
}

export default App;
