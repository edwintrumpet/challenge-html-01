import React from 'react';
import '../styles/components/Header.styl';
import Brand from './Brand';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <Brand />
      <nav className="header__navigation">
        <ul>
          <li>technology</li>
          <li>ideas</li>
          <li>leadership</li>
          <li>video</li>
          <li>news</li>
          <li>finance</li>
          <li>entertainment</li>
        </ul>
      </nav>
    </div>
    <div className="header__hamburguer-button">
      <div />
      <div />
      <div />
    </div>
  </header>
);

export default Header;
