
export const CHANGE_STATUS = 'CHANGE_STATUS'
export const CHANGE_IMPORTANCE = 'CHANGE_IMPORTANCE'

export type todosActionsType = changeStatusType | changeImportanceType

type changeStatusType = ReturnType<typeof changeStatus>
type changeImportanceType = ReturnType<typeof changeImportance>

export const changeStatus = (id: string, status: boolean) => {
  return{type: CHANGE_STATUS, id, status} as const
}
export const changeImportance = (id: string, importance: boolean) => {
  return{type: CHANGE_IMPORTANCE, id, importance} as const
}