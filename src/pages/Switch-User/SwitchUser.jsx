import React from 'react';
import { NavLink } from 'react-router-dom';
import "./SwitchUser.css"
import { USER_MAIN_DATA } from '../../API/Data/data';
 
/**
 * Temporary page, it replaces the unavailable Connection function. It allows you to switch from one user to another while waiting.
 * @returns {ReactElement} SwitchUser
 */
const SwitchUser = () => {
    return (
        <main className="main-switchUsers">
            <h1>Changer d'utilisateur</h1>
            <section className="container-users">
                {USER_MAIN_DATA.map(user => (
                    <NavLink key={user.id} className="user" to={`/profile/user/${user.id}`}>
                        <h2>
                            {`${user.userInfos.firstName}
                            ${user.userInfos.lastName}`}
                        </h2>
                    </NavLink>
                ))}
            </section>
        </main>
    );
};

export default SwitchUser;