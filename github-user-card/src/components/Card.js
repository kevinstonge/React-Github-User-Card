import React from "react";
// eslint-disable-next-line
import Axios from "axios";
import "./Card.scss";
import GitHubSVG from "./GitHubSVG";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: this.props.login, followers: [] };
  }
  componentDidMount() {
    Axios.get(`https://api.github.com/users/${this.props.login}`)
      .then((r) => {
        this.setState({ ...this.state, ...r.data });
        Axios.get(`https://api.github.com/users/${this.props.login}/followers`)
          .then((res) => {
            this.setState({ ...this.state, followers: res.data });
          })
          .catch((err) => console.log(err));
      })
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div className="fullScreen" onClick={() => this.props.exit()}>
        <div className="card bigCard" onClick={(e) => e.stopPropagation()}>
          <div className="cardHeader">
            <h2>{this.state.login}</h2>
            <button>x</button>
          </div>
          <div className="cardBody">
            <div className="cardImages">
              <img
                src={this.state.avatar_url}
                alt={`${this.state.login} avatar`}
              />
              <GitHubSVG />
            </div>
            <div className="cardInfo">
              {["Name", "Company", "Location", "Blog", "Bio"].map((stat) => {
                return (
                  <p key={`${stat}-p`}>
                    {stat}:{" "}
                    {this.state[stat.toLowerCase()]
                      ? this.state[stat.toLowerCase()]
                      : `...loading`}
                  </p>
                );
              })}
              <p>
                Followers:{" "}
                {this.state.followers.length > 0 &&
                  this.state.followers.map((follower, index) => {
                    if (index < this.state.followers.length - 1) {
                      return `${follower.login}, `;
                    } else {
                      return `${follower.login}`;
                    }
                  })}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
