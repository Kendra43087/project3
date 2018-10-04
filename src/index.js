import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import Arrow from 'react-icons/lib/fa/caret-right';
export { default } from "./components/character";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
