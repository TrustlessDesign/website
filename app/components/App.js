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
    </Fragment>
  );
}
