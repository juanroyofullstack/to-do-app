import { ColumnNames } from '../../utils/index'
import * as actionTypes from '../actionTypes'

const initialState: DataStateInitial = {
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
}

export const dataReducer = (state = initialState, action: TaskAction) => {
	switch (action.type) {
		case actionTypes.ADD_TASK: {
			const { payload } = action
			return {
				...state,
				[payload.column as ColumnNames]: [
					...state[payload.column as ColumnNames],
					{
						id: Math.random(),
						title: payload.title,
						body: payload.body,
						column: payload.column,
					},
				],
			}
		}
		case actionTypes.MODIFY_TASK: {
			const { payload } = action
			return {
				...state,
				[payload.column as ColumnNames]: state[
					payload.column as ColumnNames
				].map(task => (task.id === payload.id ? payload : task)),
			}
		}
		case actionTypes.REMOVE_TASK: {
			const { payload } = action
			return {
				...state,
				[payload.column as ColumnNames]: state[
					payload.column as ColumnNames
				].filter(i => i.id !== payload.id),
			}
		}
	}
	return state
}
