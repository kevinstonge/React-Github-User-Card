import React from "react";
import ListCards from "./ListCards";
import Axios from "axios";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { query: "", results: [] };
  }
  search = () => {
    Axios.get(`https://api.github.com/search/users?q=${this.state.query}`).then(
      (r) => {
        this.setState({
          ...this.state,
          results: r.data.items.map((item) => item.login),
        });
      }
    );
  };
  render() {
    return (
      <>
        <div className="queryContainer">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.search();
            }}
          >
            <label htmlFor="q">
              <input
                id="q"
                onChange={(e) =>
                  this.setState({ ...this.state, query: e.target.value })
                }
                value={this.state.query}
              ></input>
            </label>
            <button type="submit">search</button>
          </form>
        </div>
        <div className="listBox"></div>
        <ListCards
          cards={this.state.results}
          addFavorite={this.props.addFavorite}
          removeFavorite={this.props.removeFavorite}
          favorites={this.props.favorites}
        />
      </>
    );
  }
}
export default Search;
