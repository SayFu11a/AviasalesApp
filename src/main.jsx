import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createStore, applyMiddleware, compose } from 'redux';
import { rootReduser } from './Redux/rootReduser';
import { Provider } from 'react-redux';
import { logger } from './Redux/middleware/logger';
import { thunk } from 'redux-thunk';

import App from './components/App';
import './main.css';
import '@ant-design/v5-patch-for-react-19';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
          })
        : compose;

const store = createStore(rootReduser, composeEnhancers(applyMiddleware(logger, thunk)));

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
