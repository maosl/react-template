/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: maosiliang
 * @Contact: 15202058612
 * @Date: 2022-10-12 15:52:13
 * @LastEditors: maosiliang
 * @LastEditTime: 2022-10-13 16:37:56
 */
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store  from './store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'
import { HashRouter} from 'react-router-dom'
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
