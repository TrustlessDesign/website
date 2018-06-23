import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Services from './Services';
import Experts from './Experts';
import Faq from './Faq';

export default function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Services} />
        <Route path="/experts" component={Experts} />
        <Route path="/faq" component={Faq} />
      </Switch>
      <footer className="d-flex flex-column justify-content-center main-footer text-center">
        <div>
          All rights reserved. Trustless Design.
          <br />
          <br />
          <a href="https://twitter.com/trustlessdesign" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter" />
          </a>
          &nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/company/trustlessdesign/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </footer>
    </Fragment>
  );
}