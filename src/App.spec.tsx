import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import { initialState } from './utils/index';
import App from './App';

const mockStore = configureStore();
const mockStoreData = {
	data: initialState,
	project: { name: '', projectName: '', created: false },
};

const customRender = (customStore = mockStoreData) => {
	const store = mockStore(customStore);
	return render(
		<Provider store={store}>
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
	test('should render the board form when project is created', () => {
		const { getByTestId } = customRender({
			data: initialState,
			project: { name: 'John Doe', projectName: 'Test Boarx', created: true },
		});
		const linkElement = getByTestId(/BoardContainer/i);
		expect(linkElement).toBeTruthy();
	});
});
