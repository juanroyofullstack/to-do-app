import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";

import { store } from './store/index';
import App from './App';

import './style.css';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
