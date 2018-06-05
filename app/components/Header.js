import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <React.Fragment>
      <div className="header-bar" />
      <div className="header-wrapper">
        <Link to="/" className="tlogo">
          TRUSTLESS::DESIGN
        </Link>

        <div className="header">
          <ul className="d-flex d-sm-block justify-content-center">
            <li>
              <Link to="/">SERVICES</Link>
            </li>
            <li>
              <Link to="experts">EXPERTS</Link>
            </li>
            <li>
              <Link to="faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-bar1" />
    </React.Fragment>
  );
}
