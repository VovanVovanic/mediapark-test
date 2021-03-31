
import { SET_MESSAGE } from '../actions/auth';
import { todosActionsType, GET_ITEMS, SET_TODO_LOADING, } from './../actions/todos';


export type itemType = { id: string, label: string, isDone: boolean, isImportant: boolean }
type todosType = typeof initState;

const initState = {
  loading: false,
  error: '',
  todos: [] as Array<itemType>
}
export const todosReducer = (state: todosType = initState, action: todosActionsType): todosType => {
  switch (action.type) {
    case GET_ITEMS:
      return{...state, todos:[...action.items]}
    case SET_TODO_LOADING:
      return { ...state, loading: action.loading }
      case SET_MESSAGE:
      return{...state, error:action.message}
    default: return state
  }
}