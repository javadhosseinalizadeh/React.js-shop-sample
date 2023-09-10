import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './redux/store';
import ThemeContextWrapper from './theme/theme-wrapper';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextWrapper>
  <Provider store={store}>
    <App />
  </Provider>
  </ThemeContextWrapper>
);


reportWebVitals();
