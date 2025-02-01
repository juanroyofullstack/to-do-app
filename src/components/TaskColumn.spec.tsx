import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import { AppCreatedProvider } from '../utils/getContext';
import { initialState } from '../utils/index';

import { TaskColumnProps, TaskContainer } from './TaskColumn';

const mockTasks: ITasks[] = [
	{ id: 1, title: 'Task 1', body: 'Description 1', column: 'toDo' },
];

const mockHandleDragging = jest.fn();
const propsMock = {
	data: mockTasks,
	identifier: 'toDo',
	isDragging: false,
	handleDragging: mockHandleDragging,
};

jest.mock('../hooks/useDragAndDrop', () => ({
	useDragAndDrop: () => ({
		handleUpdateList: jest.fn(),
	}),
}));

const mockStore = configureStore();
const mockStoreData = {
	data: initialState,
	project: { name: 'juan', projectName: 'test', created: true },
};
const customRender = (props: TaskColumnProps) => {
	const store = mockStore(mockStoreData);
	return render(
		<Provider store={store}>
			<AppCreatedProvider>
				<TaskContainer {...props} />
			</AppCreatedProvider>
		</Provider>
	);
};

describe('TaskContainer', () => {
	it('renders the column title', () => {
		const { getByText } = customRender(propsMock);

		expect(getByText('To Do')).toBeInTheDocument();
	});

	it('renders tasks', () => {
		const { getByText } = customRender(propsMock);

		expect(getByText('Task 1')).toBeInTheDocument();
		expect(getByText('Task 2')).toBeInTheDocument();
	});

	// TODO: Review this test
	// it('calls handleDragging on drag events', () => {
	// 	const { getByLabelText } = customRender({
	// 		data: mockTasks,
	// 		identifier: 'toDo',
	// 		isDragging: false,
	// 		handleDragging: mockHandleDragging,
	// 	});
	// 	const task = getByLabelText('title', { selector: 'h3' });

	// 	fireEvent.dragOver(task);
	// 	fireEvent.drop(task);
	// 	expect(mockHandleDragging).toHaveBeenCalled();
	// });

	it('prevents default behavior on drag over', () => {
		const { getByTestId } = customRender(propsMock);

		const column = getByTestId('Column');
		const dragOverEvent = new Event('dragover', { bubbles: true });
		jest.spyOn(dragOverEvent, 'preventDefault');
		fireEvent(column, dragOverEvent);
		expect(dragOverEvent.preventDefault).toHaveBeenCalled();
	});
});
