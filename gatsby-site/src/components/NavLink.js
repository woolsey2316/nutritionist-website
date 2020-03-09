import React from 'react';
import { Link } from "gatsby";

const NavLink = (props) => {
    return (
        <Link
        to={ props.name=="Home" ? "/" : props.name.replace(/ /g, '') + "/"}
        activeClassName="active"
        activeStyle={{ color: "#a8b26a" }}
        style={{
            fontSize:"15px",
            padding:"5px",
            fontStyle:"normal",
            textDecoration: 'none',
            width:"100px",
            textAlign: 'center',
            fontFamily:"Crimson Text"}}
        
        >{props.name}
        </Link>
    )
}

export default NavLink