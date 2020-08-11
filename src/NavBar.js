import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <NavLink exact to="/VendingMachine">
                VendingMachine
      </NavLink>
            <NavLink exact to="/chips">
                Chips
      </NavLink>
            <NavLink exact to="/chocolate">
                Chocolate
      </NavLink>
            <NavLink exact to="/cookies">
                Cookies
      </NavLink>
        </nav>
    );
}

export default NavBar;