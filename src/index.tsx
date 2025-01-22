import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/index';
import App from './App';

import './index.css';

const container = document.getElementById('root');

if (!container) {
	throw new Error('Root container missing in index.html');
}

const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
