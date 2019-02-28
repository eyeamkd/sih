import React, { Component } from 'react'; 
import { Link } from '@material-ui/core'; 
import { NavLink } from "react-router-dom";


class Nav extends Component {
    render() {
        return (
        <nav>
            <ul>
                <li className="logo">Pay<span>Rec</span></li>
            </ul>
            <ul>
                <li><a href="#" title="About">About</a></li>
                <li><NavLink to="/signin">Sign In</NavLink></li>
                <li><a href="#" title="FAQ">FAQ</a></li>
            </ul>
        </nav>
        );
    }
    }

export default Nav;
