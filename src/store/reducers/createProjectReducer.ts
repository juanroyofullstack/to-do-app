import * as actionTypes from "../actionTypes";

const initialState: ICreateProject = {
    name: '',
    projectName: '',
    created: false
};


export const createProjectReducer = (
    state: ICreateProject = initialState,
    action: CreateAction
) => {
    switch (action.type) {
    case actionTypes.CREATE_PROJECT:
        return {
            ...state,
            ...action.payload
        };
    }
    return state;
};

