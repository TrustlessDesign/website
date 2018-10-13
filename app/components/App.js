import React, { Fragment } from 'react';
import Header from './Header';
import Services from './Services';
import Experts from './Experts';
import Faq from './Faq';
import Clients from './Clients';

export default function App() {
  return (
    <Fragment>
      <Header />

      <Services />
      <Experts />
      <Clients />
      <Faq />

      <footer className="d-flex flex-column justify-content-center main-footer text-center">
        <div>
          All rights reserved. Trustless Design.
          <br />
          <br />
          <a
            href="https://twitter.com/trustlessdesign"
            rel="noopener noreferrer"
            target="_blank"
            className="white"
            title="Twitter"
          >
            <i className="fa fa-twitter" />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://medium.com/trustless-design"
            rel="noopener noreferrer"
            target="_blank"
            className="white"
            title="Medium"
          >
            <i className="fa fa-medium" />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/company/trustlessdesign/"
            rel="noopener noreferrer"
            target="_blank"
            className="white"
            title="LinkedIn"
          >
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </footer>
    </Fragment>
  );
}
