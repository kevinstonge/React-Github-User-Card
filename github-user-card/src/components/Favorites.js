import React from "react";
import ListCards from "./ListCards";
class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorites: ["kevinstonge", "johndoe"] };
  }
  render() {
    return (
      <>
        <h2>favorites</h2>
        <div className="listBox"></div>
        <ListCards favorites={this.state.favorites} />
      </>
    );
  }
}
export default Favorites;
