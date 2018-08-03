import React from 'react';

export default function Header() {
  return (
    <React.Fragment>
      <div className="header-bar" id="services" />
      <div className="header-wrapper">
        <a href="#" className="tlogo">
          <div className="logo" />
          <div className="logo-text">TRUSTLESS::DESIGN</div>
        </a>

        <div className="header">
          <ul className="d-flex d-sm-block justify-content-center">
            <li>
              <a href="#services">SERVICES</a>
            </li>
            <li>
              <a href="#experts">EXPERTS</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-bar1" />
    </React.Fragment>
  );
}
