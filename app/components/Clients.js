import React from 'react';

export default function Clients() {
  return (
    <div className="container main-section">
      <div className="row pb-5">
        <div className="col text-center">
          <h1>
            <span className="white" style={{ fontWeight: 100 }}>
              OUR
            </span>
            <span className="color-blue"> AUDITS </span>
            <span className="white" style={{ fontWeight: 100 }}>
              AND
            </span>
            <span className="color-blue"> PARTNERS</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <a href="https://emiratecoin.io/" target="_blank" rel="noopener noreferrer">
            <img src="img/emiratecoin.png" />
          </a>
        </div>
      </div>
      <hr className="margin-top-100px" />
    </div>
  );
}
