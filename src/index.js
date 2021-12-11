import React from 'react';
import ReactDOM from 'react-dom';
import { LocationProvider } from "@reach/router";
import App from './App';

ReactDOM.render(
  <LocationProvider>
    <App />
  </LocationProvider>,
  document.getElementById('root')
);