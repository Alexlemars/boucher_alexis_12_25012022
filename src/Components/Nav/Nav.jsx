import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/logo.svg"
import './Nav.css';

/**
 * Main menu navigation inside Header
 * @returns {ReactElement} MainNav
 */


const Nav = () => {
    return (
        <nav className="nav-header">
            <Logo className="logo-header" />
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-item selected' : 'nav-item'
                }
                to="/"
                onClick={e => e.preventDefault()}
            >
                Accueil
            </NavLink>
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-item selected' : 'nav-item'
                }
                to="/profile"
                 
            >
                Profil
            </NavLink>
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-item selected' : 'nav-item'
                }
                to="/setting"
                onClick={e => e.preventDefault()}
            >
                Réglage
            </NavLink>
            <NavLink
                className={navData =>
                    navData.isActive ? 'nav-item selected' : 'nav-item'
                }
                to="/community"
                onClick={e => e.preventDefault()}
            >
                Communauté
            </NavLink>
        </nav>
    );
};

export default Nav;