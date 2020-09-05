import React from "react";
// eslint-disable-next-line
import axios from "axios";
import GitHubSVG from "./GitHubSVG";
import Card from "./Card";
import "./ListCards.scss";
class ListCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [], popup: { show: false, login: null } };
  }
  componentDidMount() {
    this.update();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.cards.join(",") !== this.props.cards.join(",")) {
      this.update();
    }
  }
  update = () => {
    this.setState(
      {
        cards: [
          ...this.props.cards.map((card) => {
            return { login: card, avatar_url: null };
          }),
        ],
        popup: { show: false, login: null },
      },
      () =>
        this.state.cards.forEach((card) => {
          axios
            .get(`https://api.github.com/users/${card.login}`)
            .then((r) => {
              this.setState({
                cards: this.state.cards.map((c) => {
                  if (c.login === card.login) {
                    return { ...r.data };
                  } else return c;
                }),
                popup: { show: false, login: null },
              });
            })
            .catch((e) => console.log(e));
        })
    );
  };
  render() {
    return (
      <>
        {this.state.cards.map((card) => (
          <div
            key={`${card.login}-miniCard`}
            className="card miniCard"
            onClick={() =>
              this.setState({
                ...this.state,
                popup: { show: true, login: card.login },
              })
            }
          >
            <p>
              <span className="imageContainer">
                {card.avatar_url === null ? (
                  <GitHubSVG />
                ) : (
                  <img src={card.avatar_url} alt={`${card.login}`} />
                )}
              </span>
              {card.login}
            </p>
          </div>
        ))}
        {this.state.popup.show && (
          <Card
            login={this.state.popup.login}
            exit={() =>
              this.setState({
                ...this.state,
                popup: { show: false, login: null },
              })
            }
          />
        )}
      </>
    );
  }
}
export default ListCards;
