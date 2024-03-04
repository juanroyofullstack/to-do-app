
interface ICreateProject {
    name: string;
    projectname: string;
    created: boolean;
}

interface ProjectState {
    project: ICreateProject;
}

type CreateAction = {
    type: string;
    project: ICreateProject;
}

interface ITasks {
    id?: number;
    title: string;
    body: string;
}

interface TasksState {
    tasks: ITasks[];
}

type TaskAction = {
    type: string;
    task: ITasks;
}

type DispatchType = (args: ITasks) => TaskAction
  