import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/favorites">
            <section className="content">
              <Favorites />
            </section>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
