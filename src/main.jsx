import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';
import 'react-toastify/dist/ReactToastify.css';

// Store
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
