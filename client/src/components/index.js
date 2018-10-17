import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';


import registerServiceWorker from './components/registerServiceWorker';

//import Arrow from 'react-icons/lib/fa/caret-right';



//export { default } from "./Nav";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();