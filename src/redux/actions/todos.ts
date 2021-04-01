
import { Action, Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { createTask, deleteTask, getTasks, updateTask } from "../../api/api"
import { createItemType } from "../../components/forms/addItemForm/addItemForm"
import { itemType } from "../reducers/todos"
import { RootStateType } from "../store"
import { setMessageType } from "./auth"
import { onErrorMsgCommon } from "./error"

export const GET_ITEMS = "GET_ITEMS"
export const SET_TODO_LOADING = 'SET_TODO_LOADING'
export const ADD_TASK = 'ADD_TASK'

export type todosActionsType = getItemsType | setLoadingType | setMessageType


type getItemsType = ReturnType<typeof getAllItems>
type setLoadingType = ReturnType<typeof setLoading>


export const getAllItems = (items: Array<itemType>) => {
  return { type: GET_ITEMS, items } as const
}
export const setLoading = (loading: boolean) => {
  return { type: SET_TODO_LOADING, loading } as const
}


export const fetchGetTasks = () => async (dispatch: Dispatch) => {
  dispatch(setLoading(true))
  try {
    const res = await getTasks()
    let arr = [] as Array<itemType>
    if (res !== null) {
      arr = Object.entries(res).map(([id, value]) => {
        return { ...value, id: id }
      })
    }
    dispatch(getAllItems(arr))
  }
  catch (e) {
    onErrorMsgCommon(e, dispatch)
  }
  dispatch(setLoading(false))
}


export const fetchCreateTasks = (payload: createItemType): ThunkType => async (dispatch) => {
  try {
    await createTask(payload)
    dispatch(fetchGetTasks())
  }
  catch (e) {
    onErrorMsgCommon(e, dispatch)
  }

}

export const fetchDeleteTask = (id: string): ThunkType => async (dispatch) => {
  try {
    await deleteTask(id)
    dispatch(fetchGetTasks())
  }
  catch (e) {
    onErrorMsgCommon(e, dispatch)
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
      onErrorMsgCommon(e, dispatch)
    }
  }

}

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>
type ThunkType = BaseThunkType<getItemsType>
