import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { FaBars } from 'react-icons/fa'

import "../Styles/Style.css"


const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const handleToggle = () => {
    setShowLinks(!showLinks)
  }

    return(
        <nav className="header">
          <div className="logo">
              <h1><a href="/">NS.</a></h1>
              <button className='nav-toggle' onClick={handleToggle}>
                <FaBars/>
            </button>
          </div>
          <ul className={`${showLinks? "navbar show": "navbar" }`}>
            <li className="li-nav">
              <NavLink to="/work" activeClassName="active">Portfolio</NavLink>
            </li>
            <li className="li-nav">
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="li-nav">
              <NavLink to="/message" activeClassName="active">Say Hello</NavLink>
            </li>
          </ul>

          
        </nav>
    )
}

export default NavBar