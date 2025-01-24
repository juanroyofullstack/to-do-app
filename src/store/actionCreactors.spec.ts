import { addProject, addTask, editTask, removeTask } from './actionCreators';
import * as actionTypes from './actionTypes';

const taskMock = {
	id: 1,
	title: 'Test Task',
	body: 'Test Body',
	column: 'toDo',
};
const projectMock = {
	name: 'John Doe',
	projectName: 'Test Project',
	created: true,
};

describe('Action Creators', () => {
	test('should create an action to add a task', () => {
		const expectedAction = {
			type: actionTypes.ADD_TASK,
			payload: taskMock,
		};

		expect(addTask(taskMock)).toEqual(expectedAction);
	});

	test('should create an action to delete a task', () => {
		const expectedAction = {
			type: actionTypes.REMOVE_TASK,
			payload: taskMock,
		};

		expect(removeTask(taskMock)).toEqual(expectedAction);
	});

	test('should create an action to edit a task', () => {
		const expectedAction = {
			type: actionTypes.MODIFY_TASK,
			payload: taskMock,
		};

		expect(editTask(taskMock)).toEqual(expectedAction);
	});

	test('should dispatch an action to create a project', () => {
		const expectedAction = {
			type: actionTypes.CREATE_PROJECT,
			payload: projectMock,
		};

		expect(addProject(projectMock)).toEqual(expectedAction);
	});
});
