import axios from "axios"
import { createItemType } from "../components/forms/addItemForm/addItemForm"
import { itemType } from "../redux/reducers/todos"


const instance = axios.create({
    baseURL: 'https://todotest-3747d-default-rtdb.firebaseio.com',
})

export const getTasks = () => {
  return instance.get<Array<itemType>>(`/todos.json`)
    .then((response) => response.data)
}
export const createTask = (payload: createItemType) => {
  return instance.post(`/todos.json`, payload)
    .then((response) => {
      return response.data
    })
}
export const deleteTask = (id: string) => {
  return instance.delete(`/todos/${id}.json`,)
    .then((response) => {
      return response.data
    })
}
export const updateTask = (id: string, payload: itemType) => {
  return instance.put(`/todos/${id}.json`,payload)
    .then((response) => {
     return response.data
    })
}

