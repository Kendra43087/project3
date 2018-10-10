import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Login from './login';
import registerServiceWorker from './registerServiceWorker';

//import Arrow from 'react-icons/lib/fa/caret-right';



ReactDOM.render(<Login />, document.getElementById('root'));
registerServiceWorker();