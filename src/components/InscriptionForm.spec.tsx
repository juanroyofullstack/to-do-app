import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { addProject } from '../store/actionCreators';

import { InscriptionForm } from './InscriptionForm';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
	useDispatch: () => mockDispatch,
}));

jest.mock('../store/actionCreators', () => ({
	addProject: jest.fn(),
}));

describe('InscriptionForm', () => {
	test('should render InscriptionForm', () => {
		const { getByTestId, getByText } = render(<InscriptionForm />);

		expect(getByTestId('InscriptionForm')).toBeInTheDocument();
		expect(
			getByText('Hi! enter your name and project name to start')
		).toBeInTheDocument();
		expect(getByText('Project Name')).toBeInTheDocument();
		expect(getByText('Name')).toBeInTheDocument();
		expect(getByText('Create Project')).toBeInTheDocument();
		expect(getByTestId('InscriptionForm')).toHaveClass('InscriptionForm');
	});

	test('should render errors for both name and project name', () => {
		const { getByTestId, getByText } = render(<InscriptionForm />);

		fireEvent.click(getByText('Create Project'));

		expect(getByTestId('errorName')).toBeInTheDocument();
		expect(getByTestId('errorProjectName')).toBeInTheDocument();
	});

	test('should render error for project name if theres no project name value', () => {
		const { getByTestId, getByText, getByLabelText } = render(
			<InscriptionForm />
		);

		const input = getByLabelText('name-input') as HTMLInputElement;

		fireEvent.change(input, { target: { value: 'Pepito' } });
		fireEvent.click(getByText('Create Project'));

		expect(getByTestId('errorProjectName')).toBeInTheDocument();
	});

	test('should render error for name if theres no name value', () => {
		const { getByTestId, getByText, getByLabelText } = render(
			<InscriptionForm />
		);

		const projectInput = getByLabelText('project-input') as HTMLInputElement;

		fireEvent.change(projectInput, { target: { value: 'Pepitos project' } });
		fireEvent.click(getByText('Create Project'));

		expect(getByTestId('errorName')).toBeInTheDocument();
	});

	test('should submit the data when both inputs have value', () => {
		const { getByText, getByLabelText } = render(<InscriptionForm />);

		const nameInput = getByLabelText('name-input') as HTMLInputElement;
		const projectInput = getByLabelText('project-input') as HTMLInputElement;

		fireEvent.change(nameInput, { target: { value: 'Pepito' } });
		fireEvent.change(projectInput, { target: { value: 'Pepitos project' } });

		fireEvent.click(getByText('Create Project'));

		expect(mockDispatch).toHaveBeenCalled();
		expect(addProject).toHaveBeenCalledWith({
			name: 'Pepito',
			projectName: 'Pepitos project',
			created: true,
		});
	});
});
