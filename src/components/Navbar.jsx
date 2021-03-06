import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  // setTimeout(() => {
  //   /*This is not inside route so gets error. To fix use Higher order withRouter function from react-router-dom*/
  //   props.history.push("/about");
  // }, 2000);

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <span className="brand-logo" href="#">
          Poke'Times
        </span>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <NavLink to="/about">About </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);
