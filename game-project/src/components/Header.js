import React from 'react';
import Logo from '../images/Logo.png';

const Header = () => {
  return (
    <div className="game-header">
      <div>
        <img src={Logo} alt="logo" className="header-logo" />
      </div>
      <div className="header-text">Shipwreact</div>
    </div>
  );
};

export default Header;
