import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './components/App';

const rootEl = document.getElementById('root');

import '../styles/app.scss';

render(
  <HashRouter>
    <Route component={App} path="/" />
  </HashRouter>,
  rootEl
);
