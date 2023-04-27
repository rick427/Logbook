import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    const location = useLocation();

    const isLinkActive = (url) => {
        if(location.pathname === url){
            return '#5780d9';
        }
        else return '#777777';
    }

    return (
        <nav className="nav">
            <div>
                <h1>LOGBOOK</h1> 
            </div>

            <ul className="list">
                <li>
                    <Link to="/">
                        <span style={{color: isLinkActive('/')}}>
                            Home
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <span style={{color: isLinkActive('/about')}}>
                            About
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <span style={{color: isLinkActive('/contact')}}>
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;