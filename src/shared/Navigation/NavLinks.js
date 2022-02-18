import React from 'react';

import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {
    return <ul className='nav-links'>
        <li>
            <NavLink to="/" exact>Usuarios</NavLink>
        </li>
        <li>
            <NavLink to="/u1/places">Mis Lugares</NavLink>
        </li>
        <li>
            <NavLink to="/places/new">Nuevo lugar</NavLink>
        </li>
        <li>
            <NavLink to="/auth">Autenticarse</NavLink>
        </li>
    </ul>
}

export default NavLinks