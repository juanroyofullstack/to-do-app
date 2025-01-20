interface ICreateProject {
	name: string;
	projectName: string;
	created: boolean;
}

interface ProjectState {
	project: ICreateProject;
}

interface CreateAction {
	type: string;
	payload: ICreateProject;
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
	payload: ITasks;
}

interface DataStateInitial {
	toDo: ITasks[];
	inProgress: ITasks[];
	inReview: ITasks[];
	Approved: ITasks[];
}

type DispatchType = (args: ITasks) => TaskAction;
