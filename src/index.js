import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const div= document.getElementById('app');

render(
    <App/>,div
);