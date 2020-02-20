import React from 'react';
import '../styles/components/Brand.styl';

const Brand = ({ footer }) => (
  <div className="brand">
    <h1 className={footer && 'brand--footer'}>Deck</h1>
    <div />
  </div>
);

export default Brand;
