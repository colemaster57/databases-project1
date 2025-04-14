import React from "react";
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    return(
        <nav className = "navBar">
            <h1 className = "logo">Steam 2.0</h1>
            <ul className = "navigation-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/store">Store</Link></li>
                <li><Link to="/library">Library</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}
export default NavigationBar;