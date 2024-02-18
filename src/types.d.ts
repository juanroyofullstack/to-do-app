// interface ICreateProject {
//     name: string;
//     projectname: string;
// }

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
    task: Task;
}

type DispatchType = (args: ITasks) => TaskAction
  