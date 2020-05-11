import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from './store/history';
import './index.css'
import App from './app/App';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);
ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();