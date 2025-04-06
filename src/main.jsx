import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import { configureStore } from '@reduxjs/toolkit';

// import { sortReduser } from './store/redusers/sortReduser';
// import { filterReduser } from './store/redusers/filterReduser';
// import { fetchReduser } from './store/redusers/fetchReduser';

import store from './store';
import { Provider } from 'react-redux';

// import { createStore, applyMiddleware } from 'redux';
// import { rootReduser } from './store/rootReduser';
// import { thunk } from 'redux-thunk';

import App from './components/App';
import './main.css';
import '@ant-design/v5-patch-for-react-19';

// const store = configureStore({
//     // Automatically calls `combineReducers`
//     reducer: {
//         sortReduser,
//         filterReduser,
//         data: fetchReduser,
//     },
// });

// const store = createStore(rootReduser, applyMiddleware(thunk));

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    // </StrictMode>
);
