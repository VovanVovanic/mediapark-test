import { CHANGE_IMPORTANCE, CHANGE_STATUS, DELETE_ITEM, ADD_ITEM, todosActionsType, GET_ITEMS} from './../actions/todos';
import { v1 } from "uuid";

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
    case CHANGE_STATUS:
      return {
        ...state, todos: state.todos.map((el) => {
          if (el.id === action.id) {
            return{...el, isDone:action.status}
          }
        return{...el}
        })
      }
    case CHANGE_IMPORTANCE:
            return {
        ...state, todos: state.todos.map((el) => {
          if (el.id === action.id) {
            return{...el, isImportant: action.importance}
          }
        return{...el}
        })
      }
    case DELETE_ITEM:
      return { ...state, todos: state.todos.filter((el) => el.id !== action.id) }
    case ADD_ITEM:
      const newItem = { id: v1(), label: action.label, isDone: false, isImportant: false }
      return { ...state, todos: [...state.todos, newItem] }

    default: return state
  }
}