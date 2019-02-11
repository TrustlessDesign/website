import React from 'react';

export default function Clients() {
  return (
    <div className="container main-section" id="clients">
      <div className="row pb-5">
        <div className="col text-center">
          <h1>
            <span className="color-blue"> AUDITS </span>
            <span className="white" style={{ fontWeight: 100 }}>
              &
            </span>
            <span className="color-blue"> PARTNERS</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <a
            href="https://medium.com/trustless-design/emirate-coin-emco-smart-contract-audit-dfc6e6be2c90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/static/assets/img/emiratecoin.png" />
          </a>
        </div>
      </div>
      <hr className="margin-top-100px" />
    </div>
  );
}
