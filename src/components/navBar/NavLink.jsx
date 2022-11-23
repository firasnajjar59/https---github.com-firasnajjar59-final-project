import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBarLink = (props) => {
  return (
    // <li className="nav-item">
          <NavLink isActive={(match)=>match&&match.isExact} className={`nav-link ${props.Class}`} to={props.path}>{props.label}</NavLink>
        // {/* </li> */}
  )
}

export default NavBarLink