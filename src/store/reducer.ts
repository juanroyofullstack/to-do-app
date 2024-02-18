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

const reducer = (
    state: TasksState = initialState,
    action: TaskAction
  ): TasksState => {
    switch (action.type) {
      case actionTypes.ADD_TASK: {
        const newTask: ITasks = {
          id: Math.random(), // not really unique
          title: action.task.title,
          body: action.task.body,
        }
        return {
          ...state,
          tasks: state.tasks.concat(newTask),
        }
      }
      case actionTypes.REMOVE_TASK: {
        const updatedTasks: ITasks[] = state.tasks.filter(
          task => task.id !== action.task.id
        )
        return {
          ...state,
          tasks: updatedTasks
        }
      }
    }
    return state
  }
  
  export default reducer