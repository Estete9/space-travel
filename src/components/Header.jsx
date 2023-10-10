import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/planet.png';

const Header = () => {
  const links = [
    { path: '/', text: 'Rockets' },
    { path: 'missions', text: 'Missions' },
    { path: 'profile', text: 'My Profile' },
  ];

  return (
    <div>
      <header>
        <nav>
          <img src={Logo} alt="Logo" />
          <ul>
            {links.map((link) => (
              <li key={link.text.toLowerCase()}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
