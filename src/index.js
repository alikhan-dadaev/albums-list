import React from 'react';
import ReactDOM from 'react-dom';
import App from './camponents/App';
import {Provider} from "react-redux";
import store from "./redux";
import './style.css'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


