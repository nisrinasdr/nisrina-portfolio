import React from "react"
import { Link } from "react-router-dom"

import "../Styles/Style.css"


const NavBar = () => {
    return(
        <nav>
          <div className="logo">
              <h1>NS.</h1>
          </div>
          <ul className="navbar">
            <li>
              <Link to="/">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/say-hello">Say Hello</Link>
            </li>
          </ul>
        </nav>
    )
}

export default NavBar