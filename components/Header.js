import React from 'react';

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo-part">
          <div className="logo" />
          <div className="logo-text">Trustless Design</div>
        </div>
        <ul className="justify-content-center">
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#experts">EXPERTS</a>
          </li>
          <li>
            <a href="#clients">AUDITS & PARTNERS</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
    </>
  );
}
