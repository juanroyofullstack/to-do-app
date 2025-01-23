import * as actionTypes from '../actionTypes';

import { dataReducer } from './dataReducer';

const initialState = {
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
};

describe('dataReducer', () => {
	it('should return the initial state', () => {
		expect(dataReducer(undefined, {} as TaskAction)).toEqual(initialState);
	});

	it('should handle ADD_TASK', () => {
		const action = {
			type: actionTypes.ADD_TASK,
			payload: {
				title: 'new task',
				body: 'task body',
				column: 'toDo',
			},
		};
		const newState = dataReducer(initialState, action);

		expect(newState.toDo.length).toBe(2);
		expect(newState.toDo[1]).toMatchObject({
			title: 'new task',
			body: 'task body',
			column: 'toDo',
		});
	});

	it('should handle MODIFY_TASK', () => {
		const action = {
			type: actionTypes.MODIFY_TASK,
			payload: {
				id: 1,
				title: 'updated post 1',
				body: 'updated body',
				column: 'toDo',
			},
		};
		const newState = dataReducer(initialState, action);

		expect(newState.toDo[0]).toMatchObject({
			id: 1,
			title: 'updated post 1',
			body: 'updated body',
			column: 'toDo',
		});
	});

	it('should handle REMOVE_TASK', () => {
		const action = {
			type: actionTypes.REMOVE_TASK,
			payload: {
				id: 1,
				title: 'deleted post 1',
				body: 'deleted body',
				column: 'toDo',
			},
		};
		const newState = dataReducer(initialState, action);

		expect(newState.toDo.length).toBe(0);
	});
});
