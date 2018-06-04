import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';

const rootEl = document.getElementById('root');

import '../styles/app.scss';

render(
  <BrowserRouter>
    <Route component={App} path="/" />
  </BrowserRouter>,
  rootEl
);
