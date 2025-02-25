import { validateForm } from './formHelpers';

describe('validateForm', () => {
	test('should return an error if no Name is provided', () => {
		const result = validateForm({ name: '', projectName: 'Project' });

		expect(result.name).toBe('Name is required');
	});

	test('should return an error if no projectName is provided', () => {
		const result = validateForm({ name: 'John Doe', projectName: '' });

		expect(result.projectName).toBe('Project Name is required');
	});

	test('should return an error if no projectName and Name is provided', () => {
		const result = validateForm({ name: '', projectName: '' });

		expect(result.name).toBe('Name is required');
		expect(result.projectName).toBe('Project Name is required');
	});
});
