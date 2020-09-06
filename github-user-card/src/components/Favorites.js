import React from "react";
import ListCards from "./ListCards";
class Favorites extends React.Component {
  render() {
    return (
      <>
        <div className="listBox"></div>
        <ListCards
          cards={this.props.favorites}
          addFavorite={this.props.addFavorite}
          removeFavorite={this.props.removeFavorite}
          favorites={this.props.favorites}
        />
      </>
    );
  }
}
export default Favorites;
