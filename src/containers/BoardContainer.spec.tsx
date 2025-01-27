import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import { useModifyContext } from '../utils/getContext';
import { initialState } from '../utils/index';

import { BoardContainer } from './BoardContainer';

jest.mock('../utils/getContext', () => ({
	useModifyContext: jest.fn(),
}));

const customRender = (customStore = mockStoreData) => {
	const store = mockStore(customStore);
	return render(
		<Provider store={store}>
			<BoardContainer />
		</Provider>
	);
};

const mockStore = configureStore();
const mockStoreData = {
	data: initialState,
	project: { name: '', projectName: '', created: false },
};

describe('BoardContainer', () => {
	beforeEach(() => {
		(useModifyContext as jest.Mock).mockImplementation(() => {
			return [{ modifyState: false }, () => {}];
		});
	});

	test('should render BoardContainer', () => {
		const { getByTestId } = customRender();
		const boardContainer = getByTestId('BoardContainer');
		const nameElement = getByTestId('NameTestId');
		const projectNameContainer = getByTestId('ProjectNameTestId');

		expect(nameElement).toBeInTheDocument();
		expect(projectNameContainer).toBeInTheDocument();
		expect(boardContainer).toBeInTheDocument();
	});

	test('should render the BoardContainer-container and the four columns', () => {
		const { getByTestId } = customRender();
		const boardContainerContainerElement = getByTestId(
			'BoardContainer-container'
		);

		expect(boardContainerContainerElement).toBeInTheDocument();
		expect(boardContainerContainerElement.children.length).toBe(4);
	});

	test('should render the TaskModaModifier if modifyState is true', () => {
		(useModifyContext as jest.Mock).mockImplementation(() => {
			return [{ modifyState: true }, () => {}];
		});
		const { getByTestId } = customRender();
		const taskEditorModalElement = getByTestId('TaskEditorModal');

		expect(taskEditorModalElement).toBeInTheDocument();
	});
});
