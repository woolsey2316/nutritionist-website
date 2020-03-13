import React from 'react';
import { Link } from "gatsby";
import Style from '../scss/navlink.module.scss'

const NavLink = (props) => {
    return (
        <Link
          to={ props.name=="Home" ? "/" : props.name.replace(/ /g, '') + "/"}
          className={Style.nav}
          activeClassName="active"
          activeStyle={{ color: "#a8b26a" }}
        >{props.name}
        </Link>
    )
}

export default NavLink