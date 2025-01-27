import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { addTask } from '../store/actionCreators';

import { CreateTask } from './CreateTask';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch,
}));

jest.mock('../store/actionCreators', () => ({
	addTask: jest.fn(),
}));

describe('CreateTask', () => {
	test('should render CreateTask addButton', () => {
		const { getByTestId } = render(<CreateTask column="toDo" />);

		expect(getByTestId('AddButton')).toBeInTheDocument();
		expect(getByTestId('AddButton')).toHaveClass('AddButton');
	});

	test('should render CreateTask form when clicking in the button', () => {
		const { getByTestId } = render(<CreateTask column="toDo" />);

		fireEvent.click(getByTestId('AddButton'));

		expect(getByTestId('CreateTask')).toBeInTheDocument();
		expect(getByTestId('CreateTask')).toHaveClass('CreateTask');
	});

	test('should send data to update when filling and clicking in submit', () => {
		const { getByLabelText, getByTestId, getByText } = render(
			<CreateTask column="toDo" />
		);

		fireEvent.click(getByTestId('AddButton'));

		const input = getByLabelText('name-input') as HTMLInputElement;
		const body = getByLabelText('body-textarea') as HTMLInputElement;

		fireEvent.change(input, { target: { value: 'Pepito' } });
		fireEvent.change(body, { target: { value: 'Body test' } });

		expect(input.value).toBe('Pepito');
		expect(body.value).toBe('Body test');
		getByText('Create').click();

		expect(mockDispatch).toHaveBeenCalled();
		expect(addTask).toHaveBeenCalledWith({
			title: 'Pepito',
			body: 'Body test',
			column: 'toDo',
		});
	});
});
