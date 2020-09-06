import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Favorites from "./components/Favorites";
import Search from "./components/Search";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = { favorites: [] };
  }
  componentDidMount() {
    if (localStorage.getItem("ghFavorites") !== null) {
      this.setState({
        favorites: JSON.parse(localStorage.getItem("ghFavorites")),
      });
    }
  }
  addFavorite = (login) => {
    this.setState({ favorites: [...this.state.favorites, login] }, () => {
      localStorage.setItem("ghFavorites", JSON.stringify(this.state.favorites));
    });
  };
  removeFavorite = (login) => {
    this.setState(
      {
        favorites: this.state.favorites.filter((f) => f !== login),
      },
      () => {
        localStorage.setItem(
          "ghFavorites",
          JSON.stringify(this.state.favorites)
        );
      }
    );
  };
  render() {
    return (
      <Router>
        <Header />
        <section className="content">
          <Switch>
            <Route path="/favorites">
              <Favorites
                addFavorite={this.addFavorite}
                removeFavorite={this.removeFavorite}
                favorites={this.state.favorites}
              />
            </Route>
            <Route path="/search">
              <Search
                addFavorite={this.addFavorite}
                removeFavorite={this.removeFavorite}
                favorites={this.state.favorites}
              />
            </Route>
            <Route exact path="/">
              <Redirect to="/favorites" />
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }
}

export default App;
