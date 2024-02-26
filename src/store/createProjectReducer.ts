import * as actionTypes from "./actionTypes"

const initialState = {
  project: {
    name: '',
    projectname: '',
    created: false
  }
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
            created: action.project.created
          },
        }
      }
    }
    return state
  }

