import React from "react";
import Axios from "axios";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: this.props.match.params.login };
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.login !== prevProps.match.params.login) {
      this.setState({ login: this.props.match.params.login });
      Axios.get(`https://api.github.com/users/${this.props.match.params.login}`)
        .then((r) => this.setState(r.data))
        .catch((e) => console.log(e));
    }
  }

  render() {
    return (
      <div className="card bigCard">
        <h2>{this.state.login}</h2>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Card;
