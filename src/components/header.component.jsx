import React from 'react';
import Logo from './logo.component';
import LogoutButton from './buttonlogout.component';
import './header.component.css'; // Importe o arquivo CSS para estilização

function Header() {
  return (
    <header className="header">
      <div>
        <Logo />
      </div>
      <div>
        <h1>BETHACKER</h1>
      </div>
      <div>
        <LogoutButton />
      </div>
    </header>
  );
}

export default Header;
