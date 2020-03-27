import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// import axios from 'axios';

// axios.defaults.baseURL = 'https://burger-dabf0.firebaseio.com/';
// axios.interceptors.request.use(
//   (requestConfig) => {
//     console.log(requestConfig);
//     // Return the requestConfig, unless you'll block it
//     return requestConfig;
//   },
//   (error) => {
//     console.log(error);
//     // Return the promise error so you can handle it again with catch method
//     // Makes sense for a local task
//     return Promise.reject(error);
//   }
// );

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
