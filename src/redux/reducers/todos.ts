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
    {id:v1(), label: 'Buy some meal', isDone: false, isImportant: false},
  ]
}
export const todosReducer = (state: todosType = initState, action: any): todosType => {
  switch (action.type) {
    default: return state
  }
}