import { CHANGE_STATUS, todosActionsType } from './../actions/todos';
import { v1 } from "uuid";

export type itemType = { id: string, label: string, isDone: boolean, isImportant: boolean }
type todosType = typeof initState;

const initState = {
  loading: false,
  todos: [
    { id: v1(), label: 'Drink tea', isDone: false, isImportant: false },
    { id: v1(), label: 'Have a lunch', isDone: false, isImportant: true },
    { id: v1(), label: 'Play game', isDone: false, isImportant: false },
    { id: v1(), label: 'Learn React', isDone: false, isImportant: true},
    {id:v1(), label: 'Buy some meal hfdkjhd and finish this test finally', isDone: false, isImportant: false},
  ]
}
export const todosReducer = (state: todosType = initState, action: todosActionsType): todosType => {
  switch (action.type) {
    case CHANGE_STATUS:
      return {
        ...state, todos: state.todos.map((el) => {
          if (el.id === action.id) {
            return{...el, isDone:action.status}
          }
        return{...el}
      })}
    default: return state
  }
}