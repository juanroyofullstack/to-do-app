import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import { initialState } from './utils/index';
import App from './App';

const mockStore = configureStore();
const store = mockStore({
	project: { name: '', projectName: '', created: false },
	data: initialState,
});

const customRender = (customStore = store) => {
	return render(
		<Provider store={customStore}>
			<App />
		</Provider>
	);
};

describe('App', () => {
	test('should render html parent div on render', () => {
		const { getByTestId } = customRender();
		const linkElement = getByTestId(/App/i);
		expect(linkElement).toBeTruthy();
	});
	test('should render incription form when project is not created', () => {
		const { getByTestId } = customRender();
		const linkElement = getByTestId(/InscriptionForm/i);
		expect(linkElement).toBeTruthy();
	});
});
