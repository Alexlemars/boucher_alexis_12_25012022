import React from 'react';
import { NavLink } from 'react-router-dom';
import './ButtonIcon.css';


const ButtonIcon = ({ path, imgSrc, altText }) => {
    return (
        <NavLink
            className="nav-icon"
            to={path}
            onClick={e => e.preventDefault()}
        >
            <button className="btn-icon">
                <img className="icon" src={imgSrc} alt={altText} />
            </button>
        </NavLink>
    );
};

export default ButtonIcon;