import * as actionTypes from "./actionTypes"

export function addTask(task: ITasks) {
  const action: TaskAction = {
    type: actionTypes.ADD_TASK,
    task,
  }

  return action
}

export function removeArticle(task: ITasks) {
  const action: TaskAction = {
    type: actionTypes.REMOVE_TASK,
    task,
  }
  return action
}

// export function simulateHttpRequest(action: TaskAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }


