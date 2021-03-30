import { taskStatuses } from './todos';
import { Action, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { createTask, deleteTask, getTasks, updateTask } from "../../app/app"
import { itemType } from "../reducers/todos"
import { RootStateType } from "../store"

export const CHANGE_STATUS = 'CHANGE_STATUS'
export const CHANGE_IMPORTANCE = 'CHANGE_IMPORTANCE'
export const DELETE_ITEM = 'DELETE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'
export const GET_ITEMS = "GET_ITEMS"

export type todosActionsType = changeStatusType | changeImportanceType | deleteItemType | addItemType |getItemsType

type changeStatusType = ReturnType<typeof changeStatus>
type changeImportanceType = ReturnType<typeof changeImportance>
type deleteItemType = ReturnType<typeof deleteItem>
type addItemType = ReturnType<typeof addItem>
type getItemsType = ReturnType<typeof getAllItems>



export const changeStatus = (id: string, status: boolean) => {
  return{type: CHANGE_STATUS, id, status} as const
}
export const changeImportance = (id: string, importance: boolean) => {
  return{type: CHANGE_IMPORTANCE, id, importance} as const
}
export const deleteItem= (id: string) => {
  return{type: DELETE_ITEM, id} as const
}
export const addItem= (label:string) => {
  return{type: ADD_ITEM, label} as const
}
export const getAllItems= (items:Array<itemType>) => {
  return{type: GET_ITEMS, items} as const
}


export const fetchGetTasks = () => async (dispatch: Dispatch) => {
  try {
    const res = await getTasks()
    const arr = Object.keys(res).map((el) => {
      return {
        ...res[el],
        id:el
      }
    })
    dispatch(getAllItems(arr))
  }
  catch (error) {
    console.log(error);
    
  }
}

export const fetchCreateTasks = (payload:itemType):ThunkType => async (dispatch) => {
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
