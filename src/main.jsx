import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createStore, applyMiddleware } from 'redux';
import { rootReduser } from './Redux/rootReduser';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

import App from './components/App';
import './main.css';
import '@ant-design/v5-patch-for-react-19';

const store = createStore(rootReduser, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
