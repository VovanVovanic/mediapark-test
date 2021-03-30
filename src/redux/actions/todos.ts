
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const CHANGE_IMPORTANCE = 'CHANGE_IMPORTANCE'
export const DELETE_ITEM = 'DELETE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'

export type todosActionsType = changeStatusType | changeImportanceType | deleteItemType | addItemType

type changeStatusType = ReturnType<typeof changeStatus>
type changeImportanceType = ReturnType<typeof changeImportance>
type deleteItemType = ReturnType<typeof deleteItem>
type addItemType = ReturnType<typeof addItem>

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