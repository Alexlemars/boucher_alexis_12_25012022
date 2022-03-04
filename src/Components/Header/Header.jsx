import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

/**
 * Header of the website app
 * @returns {ReactElement} Header component
 */

const Header = () => {
    return (
        <header>
            <Nav/>
            
        </header>
    );
};

export default Header;