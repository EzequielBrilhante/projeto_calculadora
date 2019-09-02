import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import * as serviceWorker from './serviceWorker';
import { directive } from '@babel/types';

ReactDOM.render(
    <div >
        <h1> Calculadora </h1> 
        <Calculator / >
    </div>, document.getElementById('root'));
serviceWorker.unregister();