import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '../vendor/morhpext/morphext';

const rootEl = document.getElementById('root');

import '../styles/app.scss';

render(<App />, rootEl);
