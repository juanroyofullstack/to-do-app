import type { RootState } from '../store/index';

import {
	selectProject,
	selectProjectData,
	selectProjectIsCreated,
} from './selectors';

const stateMock: RootState = {
	project: {
		name: 'John Doe',
		projectName: 'Project Test',
		created: true,
	},
	data: {
		toDo: [
			{
				id: 1,
				title: 'post 1',
				body: 'Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi',
				column: 'toDo',
			},
		],
		inProgress: [],
		inReview: [],
		Approved: [],
	},
};

describe('selectors', () => {
	test('should return the project state', () => {
		const result = selectProjectIsCreated(stateMock);

		expect(result).toBe(true);
	});
	test('should return the project object', () => {
		const result = selectProject(stateMock);

		expect(result).toMatchObject(stateMock.project);
	});

	test('should return the project data', () => {
		const result = selectProjectData(stateMock);

		expect(result).toMatchObject(stateMock.data);
	});
});
