import { todosActionsType, GET_ITEMS} from './../actions/todos';


export type itemType = { id: string, label: string, isDone: boolean, isImportant: boolean }
type todosType = typeof initState;

const initState = {
  loading: false,
  todos: [] as Array<itemType>
}
export const todosReducer = (state: todosType = initState, action: todosActionsType): todosType => {
  switch (action.type) {
    case GET_ITEMS:
      return{...state, todos:[...action.items]}

    default: return state
  }
}