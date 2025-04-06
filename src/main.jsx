import { createRoot } from 'react-dom/client';

import store from './store';
import { Provider } from 'react-redux';

import App from './components/App';
import './main.css';
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
