import React from 'react';
import Brand from './Brand';
import '../styles/components/Footer.styl';

const Footer = () => {
  const options = [
    'TECHNOLOGY',
    'LEADERSHIP',
    'NEWS',
    'ENTERTAINMENT',
    'IDEAS',
    'VIDEO',
    'FINANCE',
  ];
  const icons = ['instagram', 'facebook', 'pinterest', 'twitter'];
  return (
    <footer className="footer">
      <div className="footer__main-container">
        <div>
          <Brand />
          <p> © 2018 Deck</p>
          <p>Component based UI Kit</p>
        </div>
        <ul className="footer__main-list">
          {options.map(name => (
            <li className="footer__item-list" key={name}>
              {name}
            </li>
          ))}
        </ul>
        <div>
          <div>
            {icons.map(icon => (
              <img
                key={icon}
                alt="icons-footer"
                className="footer__icons"
                src={`/../../resources/imgs/${icon}.png`}
              />
            ))}
          </div>
          <div>
            <input />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
