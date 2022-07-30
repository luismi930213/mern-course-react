import React, { useContext } from 'react';

import { NavLink } from 'react-router-dom';
import './NavLinks.css';
import { AuthContext } from '../context/auth-context';
import Button from '../FormElements/Button';

const NavLinks = props => {
    const auth = useContext(AuthContext);
    return (<ul className='nav-links'>
        <li>
            <NavLink to="/" exact>Usuarios</NavLink>
        </li>
        {auth.isLoggedIn &&
            <li>
                <NavLink to="/u1/places">Mis Lugares</NavLink>
            </li>}
        {auth.isLoggedIn && <li>
            <NavLink to="/places/new">Nuevo lugar</NavLink>
        </li>}
        {!auth.isLoggedIn && <li>
            <NavLink to="/auth">Autenticarse</NavLink>
        </li>}
        {auth.isLoggedIn && (<li>
            <button onClick={auth.logout}>Salir</button>
        </li>)}
    </ul>)
}

export default NavLinks