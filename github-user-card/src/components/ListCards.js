import React from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line
import axios from "axios";
import GitHubSVG from "./GitHubSVG";
import "./ListCards.scss";
class ListCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [
        ...this.props.favorites.map((favorite) => {
          return { username: favorite, avatar_url: null };
        }),
      ],
    };
  }
  //   componentDidMount() {
  //     this.state.favorites.forEach((favorite) => {
  //       axios.get(`https://api.github.com/users/${favorite.username}`).then((r) =>
  //         this.setState({
  //           favorites: this.state.favorites.map((f) => {
  //             if (f.username === favorite.username) {
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
          <NavLink to="/test">
            <div
              className="card miniCard"
              key={`${favorite.username}-miniCard`}
            >
              <p>
                <span className="imageContainer">
                  {favorite.avatar_url === null ? (
                    <GitHubSVG />
                  ) : (
                    <img
                      src={favorite.avatar_url}
                      alt={`${favorite.username}`}
                    />
                  )}
                </span>
                {favorite.username}
              </p>
            </div>
          </NavLink>
        ))}
      </>
    );
  }
}
export default ListCards;
