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
        <div className="listBox"></div>
        <ListCards cards={this.state.favorites} />
      </>
    );
  }
}
export default Favorites;
