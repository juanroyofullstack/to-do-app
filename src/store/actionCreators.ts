import * as actionTypes from "./actionTypes";

export function addTask(task: ITasks): TaskAction {
    return {
        type: actionTypes.ADD_TASK,
        payload: task
    };
}

export function editTask(task: ITasks): TaskAction {
    return {
        type: actionTypes.MODIFY_TASK,
        payload: task
    };
}

export function removeTask(task: ITasks): TaskAction {
    return {
        type: actionTypes.REMOVE_TASK,
        payload: task
    };
}

export function addProject(project: ICreateProject): CreateAction {
    return {
        type: actionTypes.CREATE_PROJECT,
        payload: project
    };
}

