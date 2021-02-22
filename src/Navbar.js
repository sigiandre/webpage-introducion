import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/contacto">
                        Contacto
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/digimon">
                        Digimon
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;