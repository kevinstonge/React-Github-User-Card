import React from "react";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>
            <NavLink to="/">GitHub Cards</NavLink>
          </h1>
        </header>
        <nav>
          <NavLink to="/favorites" activeClassName="current">
            favorites
          </NavLink>
          <NavLink to="/search" activeClassName="current">
            search github
          </NavLink>
        </nav>
      </>
    );
  }
}
export default Header;
