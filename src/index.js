import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterApp from './CounterApp';

const divRoot =document.querySelector('#app');

ReactDOM.render( <CounterApp value={ 100 } />, divRoot);
