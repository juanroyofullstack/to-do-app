import * as actionTypes from "./actionTypes"

const initialState: TasksState = {
  tasks: [
    {
      id: 1,
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
}

export const taskReducer = (
    state = initialState,
    action: TaskAction
  ) => {
    switch (action.type) {
      case actionTypes.ADD_TASK: {
        return {
          ...state,
          tasks: state.tasks.concat({
            id: Math.random(), // not really unique
            title: action.task.title,
            body: action.task.body,
          }),
        }
      }
      case actionTypes.REMOVE_TASK: {
        return {
          ...state,
          tasks:  state.tasks.filter(
            task => task.id !== action.task.id
          )
        }
      }
    }
    return state
  }

