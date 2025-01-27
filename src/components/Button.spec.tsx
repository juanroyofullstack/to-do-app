import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
	test('should render Button', () => {
		const { getByTestId, queryByText, getByRole } = render(
			<Button title="test" className="test" type="button" />
		);

		expect(getByTestId('Button')).toBeInTheDocument();
		expect(getByTestId('Button')).toHaveClass('test');
		expect(getByRole('button')).toBeInTheDocument();
		expect(queryByText('test')).toBeInTheDocument();
	});

	test('should call onClick property when clicking on the Button', () => {
		const mockOnClick = jest.fn();
		const { getByRole } = render(
			<Button
				title="test"
				className="test"
				type="button"
				onClick={mockOnClick}
			/>
		);

		fireEvent.click(getByRole('button'));

		expect(mockOnClick).toHaveBeenCalled();
	});
});
