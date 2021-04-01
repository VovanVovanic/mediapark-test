import axios from "axios"
import { createItemType } from "../addItemForm/addItemForm"
import { itemType } from "../redux/reducers/todos"


export const getTasks = () => {
  return axios.get<Array<itemType>>(`https://todotest-3747d-default-rtdb.firebaseio.com/todos.json`)
    .then((response) => response.data)
}
export const createTask = (payload: createItemType) => {
  return axios.post(`https://todotest-3747d-default-rtdb.firebaseio.com/todos.json`, payload)
    .then((response) => {
      return response.data
    })
}
export const deleteTask = (id: string) => {
  return axios.delete(`https://todotest-3747d-default-rtdb.firebaseio.com/todos/${id}.json`,)
    .then((response) => {
      return response.data
    })
}
export const updateTask = (id: string, payload: itemType) => {
  return axios.put(`https://todotest-3747d-default-rtdb.firebaseio.com/todos/${id}.json`,payload)
    .then((response) => {
     return response.data
    })
}

