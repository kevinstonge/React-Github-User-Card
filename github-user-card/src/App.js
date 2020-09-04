import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/favorites">
          <section className="content">
            <Favorites />
          </section>
        </Route>
        <Route path="/">{<Redirect to="/favorites" />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
