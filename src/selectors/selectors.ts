import type { RootState } from '../store/index';

const selectProjectIsCreated = (state: RootState) => {
	return state.project.created;
};

const selectProject = (state: RootState) => {
	return state.project;
};

const selectProjectData = (state: RootState) => {
	return state.data;
};

export { selectProjectIsCreated, selectProject, selectProjectData };
