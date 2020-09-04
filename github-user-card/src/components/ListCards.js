import React from "react";
import { NavLink, Route, matchPath } from "react-router-dom";
// eslint-disable-next-line
import axios from "axios";
import GitHubSVG from "./GitHubSVG";
import Card from "./Card";
import "./ListCards.scss";
class ListCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [
        ...this.props.favorites.map((favorite) => {
          return { login: favorite, avatar_url: null };
        }),
      ],
    };
  }
  //   componentDidMount() {
  //     this.state.favorites.forEach((favorite) => {
  //       axios.get(`https://api.github.com/users/${favorite.login}`).then((r) =>
  //         this.setState({
  //           favorites: this.state.favorites.map((f) => {
  //             if (f.login === favorite.login) {
  //               f = { ...f, ...r.data };
  //             }
  //             return f;
  //           }),
  //         })
  //       );
  //     });
  //   }
  render() {
    return (
      <>
        {this.state.favorites.map((favorite) => (
          <NavLink
            to={{
              pathname: `/favorites/${favorite.login}`,
              githubData: favorite,
            }}
            key={`${favorite.login}-miniCard`}
          >
            <div className="card miniCard">
              <p>
                <span className="imageContainer">
                  {favorite.avatar_url === null ? (
                    <GitHubSVG />
                  ) : (
                    <img src={favorite.avatar_url} alt={`${favorite.login}`} />
                  )}
                </span>
                {favorite.login}
              </p>
            </div>
          </NavLink>
        ))}
        <Route
          path="/favorites/:login"
          component={() => (
            <Card
              match={matchPath(window.location.pathname, {
                path: "/favorites/:login",
                exact: false,
                strict: false,
              })}
            />
          )}
        ></Route>
      </>
    );
  }
}
export default ListCards;
