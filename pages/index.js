import React from 'react';
import Head from 'next/head';
import '../styles/app.scss';
import Header from '../components/Header';
import Services from '../components/Services';
import Experts from '../components/Experts';
import Clients from '../components/Clients';
import Faq from '../components/Faq';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faCogs, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTelegramPlane,
  faTwitter,
  faLinkedinIn,
  faMediumM,
  faStackOverflow,
  faGithub,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faCheck,
  faCogs,
  faTelegramPlane,
  faTwitter,
  faLinkedinIn,
  faMediumM,
  faStackOverflow,
  faGithub,
  faEnvelope,
  faTelegram
);

dom.watch();

export default () => (
  <div>
    <Head>
      <title>Trustless Design - Smart Contract Audit for the Ethereum Blockchain</title>
      <meta
        name="description"
        content="Smart Contract Audits for the Ethereum Blockchain. Experts: Experienced Conference Speakers and Coding Competitions Winners."
      />

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
      <meta charSet="utf-8" />

      <link
        href="https://fonts.googleapis.com/css?family=Raleway:100, 100i, 400, 400i"
        rel="stylesheet"
      />

      <link rel="shortcut icon" href="static/assets/img/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="static/assets/img/favicon.ico" type="image/x-icon" />
    </Head>
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
          <i className="fab fa-twitter" />
        </a>
        &nbsp;&nbsp;
        <a
          href="https://medium.com/trustless-design"
          rel="noopener noreferrer"
          target="_blank"
          className="white"
          title="Medium"
        >
          <i className="fab fa-medium-m" />
        </a>
        &nbsp;&nbsp;
        <a
          href="https://www.linkedin.com/company/trustlessdesign/"
          rel="noopener noreferrer"
          target="_blank"
          className="white"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin-in" />
        </a>
      </div>
    </footer>
  </div>
);
