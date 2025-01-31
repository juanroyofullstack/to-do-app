import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { useModifyContext } from '../utils/getContext';

import { Task } from './Task';

jest.mock('../utils/getContext', () => ({
	useModifyContext: jest.fn(),
}));

const mockSetAppState = jest.fn();

const taskMock = {
	title: 'Test Task',
	body: 'This is a test task',
	column: 'toDo',
};

describe('Task Component', () => {
	(useModifyContext as jest.Mock).mockReturnValue([{}, mockSetAppState]);
	it('renders task title and body', () => {
		const { getByText } = render(
			<Task task={taskMock} handleDragging={() => {}} />
		);
		expect(getByText('Test Task')).toBeInTheDocument();
		expect(getByText('This is a test task')).toBeInTheDocument();
	});

	// TODO: Test the drag and drop functionality

	it('calls handleDragging with false on drag end', () => {
		const handleDragging = jest.fn();
		const { getByLabelText } = render(
			<Task task={taskMock} handleDragging={handleDragging} />
		);
		const taskElement = getByLabelText('body');
		fireEvent.dragEnd(taskElement);

		expect(handleDragging).toHaveBeenCalledWith(false);
	});

	it('sets app state on click', () => {
		const { getByLabelText } = render(
			<Task task={taskMock} handleDragging={() => {}} />
		);
		const taskElement = getByLabelText('title');
		fireEvent.click(taskElement);
		expect(mockSetAppState).toHaveBeenCalledWith({
			modifyState: true,
			taskData: taskMock,
		});
	});
});
