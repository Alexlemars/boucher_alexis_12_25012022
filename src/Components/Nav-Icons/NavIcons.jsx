import React from 'react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import YogaIcon from "../../assets/icon-yoga.svg"
import SwimIcon from "../../assets/icon-swim.svg"
import CyclingIcon from "../../assets/icon-cycle.svg"
import MusculationIcon from "../../assets/icon-musculation.svg"
import './NavIcons.css';

/**
 * Secondary menu navigation
 * @returns {ReactElement} NavIcons component
 */


const NavIcons = () => {
    return (
        <nav className="nav-icons">
            <div className="container-icons">
                <ButtonIcon
                    path="/user/meditation"
                    imgSrc={YogaIcon}
                    altText="Voir méditation"
                />
                <ButtonIcon
                    path="/user/swimming"
                    imgSrc={SwimIcon}
                    altText="Voir natation"
                />

                <ButtonIcon
                    path="/user/cycling"
                    imgSrc={CyclingIcon}
                    altText="Voir cyclisme"
                />

                <ButtonIcon
                    path="/user/weight"
                    imgSrc={MusculationIcon}
                    altText="Voir musculation"
                />
            </div>
            <span className="copyright">
                Copyright, SportSee 2020
            </span>
        </nav>
    );
};

export default NavIcons;