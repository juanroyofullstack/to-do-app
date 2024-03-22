
interface ICreateProject {
    name: string;
    projectname: string;
    created: boolean;
}

interface ProjectState {
    project: ICreateProject;
}

interface CreateAction {
    type: string;
    project: ICreateProject;
}

interface ITasks {
    id?: number;
    title: string;
    body: string;
    column: string;
}

interface TasksState {
    tasks: ITasks[];
}

interface TaskAction {
    type: string;
    task: ITasks;
}

interface DataStateInitial {
    toDo: ITasks[];
    inProgress: ITasks[];
    inReview: ITasks[];
    Approved: ITasks[];
}

type DispatchType = (args: ITasks) => TaskAction
