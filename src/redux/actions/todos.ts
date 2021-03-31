
import { Action, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { createItemType } from "../../addItemForm/addItemForm"
import { createTask, deleteTask, getTasks, updateTask } from "../../api/api"
import { itemType } from "../reducers/todos"
import { RootStateType } from "../store"

export const GET_ITEMS = "GET_ITEMS"

export type todosActionsType = getItemsType


type getItemsType = ReturnType<typeof getAllItems>


export const getAllItems= (items:Array<itemType>) => {
  return{type: GET_ITEMS, items} as const
}


export const fetchGetTasks = () => async (dispatch: Dispatch) => {
  try {
    const res = await getTasks()
    const arr = Object.entries(res).map(([key, value]) => {
      return {
        key,
        ...value
      }
    })
    dispatch(getAllItems(arr))
  }
  catch (error) {
    console.log(error);
    
  }
}

export const fetchCreateTasks = (payload:createItemType):ThunkType => async (dispatch) => {
  try {
    await createTask(payload)
    dispatch(fetchGetTasks())
  }
  catch (error) {
    console.log(error);
  }
}

export const fetchDeleteTask = (id: string): ThunkType => async (dispatch) => {
  try {
    await deleteTask(id)
    dispatch(fetchGetTasks())
  }
  catch (e) {
    console.log(e);
  }
}
export const fetchUpdateTask = (id: string, status: number): ThunkType => async (dispatch, getState) => {
 
  const tasks = getState().todos.todos
  const item = tasks.find((el) => el.id === id)
  
  if (item) {
    const payload = { ...item }
    if (status === 0) {
      payload.isImportant = !payload.isImportant
    }
    if (status === 1) {
      payload.isDone = !payload.isDone
    }
    try {
    await updateTask(id, payload)
    dispatch(fetchGetTasks())
  }
  catch (e) {
    console.log(e);
  }
  }

}

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>
type ThunkType = BaseThunkType<getItemsType>
