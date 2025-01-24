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
	test('should render incription form when project is not created', async () => {
		const { getByTestId } = customRender();
		const inscriptionForm = await getByTestId('InscriptionForm');

		expect(inscriptionForm).toBeTruthy();
	});

	test('should render the board form when project is created', () => {
		const { getByTestId } = customRender({
			data: initialState,
			project: { name: 'John Doe', projectName: 'Test Board', created: true },
		});

		expect(getByTestId('BoardContainer')).toBeTruthy();
	});
});
