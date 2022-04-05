import React from 'react';
import { NavLink } from 'react-router-dom';

import "../styles/navigation.scss"
import Logo from './Logo';


const navigation = () => {
    return (
        <div className='navigation'>
        <Logo />
        <ul>
            <NavLink to="/" className={ (nav) => (nav.isActive ? "nav-active" : "") }>
                <li>Accueil</li>
            </NavLink>
            <NavLink to="/about" className={ (nav) => (nav.isActive ? "nav-active" : "") }>
                <li>À propos</li>
            </NavLink>
            <NavLink to="/countries" className={ (nav) => (nav.isActive ? "nav-active" : "") }>
                <li>Pays</li>
            </NavLink>
        </ul>
            
        </div>
    );
};

export default navigation;