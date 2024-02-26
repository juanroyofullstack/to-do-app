import * as actionTypes from "./actionTypes"

const initialState = {
    name: '',
    projectname: '',
}

export const createProjectReducer = (
    state = initialState,
    action: CreateAction
  ) => {
    switch (action.type) {
      case actionTypes.CREATE_PROJECT: {
        return {
          ...state,
          project: {
            name: action.project.name,
            projectname: action.project.projectname,
          },
        }
      }
    }
    return state
  }

