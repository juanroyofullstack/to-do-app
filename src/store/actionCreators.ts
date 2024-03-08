import * as actionTypes from "./actionTypes";

export function addTask(task: ITasks): TaskAction {
    return {
        type: actionTypes.ADD_TASK,
        task,
    };
}

export function addProject(project: ICreateProject): CreateAction {
    return {
        type: actionTypes.CREATE_PROJECT,
        project,
    };
}

export function removeArticle(task: ITasks): TaskAction {
    return {
        type: actionTypes.REMOVE_TASK,
        task,
    };
}
