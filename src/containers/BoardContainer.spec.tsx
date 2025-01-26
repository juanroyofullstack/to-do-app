import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import { AppCreatedProvider } from '../utils/getContext';
import { initialState } from '../utils/index';

import { BoardContainer } from './BoardContainer';

const customRender = (customStore = mockStoreData) => {
	const store = mockStore(customStore);
	return render(
		<Provider store={store}>
			<AppCreatedProvider>
				<BoardContainer />
			</AppCreatedProvider>
		</Provider>
	);
};

const mockStore = configureStore();
const mockStoreData = {
	data: initialState,
	project: { name: '', projectName: '', created: false },
};

describe('BoardContainer', () => {
	test('should render BoardContainer', () => {
		const { getByTestId } = customRender();
		const boardContainer = getByTestId('BoardContainer');
		expect(boardContainer).toBeInTheDocument();
	});

	test('should render the name and the project name', () => {
		const { getByTestId } = customRender();
		const NameElement = getByTestId('NameTestId');
		const ProjectNameContainer = getByTestId('ProjectNameTestId');

		expect(NameElement).toBeInTheDocument();
		expect(ProjectNameContainer).toBeInTheDocument();
	});

	test('should render the BoardContainer-container and the four columns', () => {
		const { getByTestId } = customRender();
		const BoardContainerContainerElement = getByTestId(
			'BoardContainer-container'
		);

		expect(BoardContainerContainerElement).toBeInTheDocument();
		expect(BoardContainerContainerElement.children.length).toBe(4);
	});
});
