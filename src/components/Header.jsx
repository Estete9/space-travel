import React from 'react';
import Logo from '../assets/planet.png';

const Header = () => (
  <div>
    <header>
      <nav>
        <img src={Logo} alt="Logo" />
        <ul>
          <li><a href="/">Rockets</a></li>
          <li><a href="/">Missions</a></li>
          <li><a href="/">My Profile</a></li>
        </ul>
      </nav>
    </header>

  </div>
);

export default Header;
