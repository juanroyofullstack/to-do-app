import * as actionTypes from '../actionTypes';

import { createProjectReducer } from './createProjectReducer';

const initialState = {
	name: '',
	projectName: '',
	created: false,
};

describe('createProjectReducer', () => {
	test('should return the initial state', () => {
		expect(
			createProjectReducer(undefined, {
				type: '',
			} as CreateAction)
		).toEqual(initialState);
	});

	test('should handle CREATE_PROJECT', () => {
		const action = {
			type: actionTypes.CREATE_PROJECT,
			payload: {
				name: 'John Doe',
				projectName: 'Project Test',
				created: true,
			},
		};

		expect(createProjectReducer(initialState, action)).toEqual(action.payload);
	});
});
