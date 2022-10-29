import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <h2>Navbar</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookings">Booking Log</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
