import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <section className="content">
          <Switch>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
