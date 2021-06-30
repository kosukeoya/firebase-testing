import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopPageContainer from './container/TopPageContainer';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TopPageContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
