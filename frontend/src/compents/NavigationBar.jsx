import React from "react";
import { Link } from 'react-router-dom'
import '.NavigationBar.css'

function NavigationBar() {
    return(
        <nav className = "navBar">
            <h2>Steam 2.0</h2>
            <ul>
                <li><Link to = "/"></Link></li>
                <li><Link to = "/store">Store</Link></li>
                <li><Link to = "/library">Library</Link></li>
            </ul>
        </nav>
    )
}
export default NavigationBar