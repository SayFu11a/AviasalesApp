import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createStore } from 'redux';
import { rootReduser } from './Redux/rootReduser';
import { Provider } from 'react-redux';

import App from './components/App';
import './main.css';
import '@ant-design/v5-patch-for-react-19';

const store = createStore(rootReduser);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
);
