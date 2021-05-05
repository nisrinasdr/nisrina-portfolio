import React from "react"
import { NavLink } from "react-router-dom"

import "../Styles/Style.css"


const NavBar = () => {
    return(
        <nav className="header">
          <div className="logo">
              <h1><a href="/">NS.</a></h1>
          </div>
          <ul className="navbar">
            <li>
              <NavLink to="/work" activeClassName="active">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/message" activeClassName="active">Say Hello</NavLink>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar