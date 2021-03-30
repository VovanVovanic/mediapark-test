import axios from "axios"
import { itemType } from "../redux/reducers/todos"


export const getTasks = () => {
  return axios.get(`https://todotest-3747d-default-rtdb.firebaseio.com/todos.json`)
    .then((response) => response.data)
}
export const createTask = (payload: itemType) => {
  return axios.post(`https://todotest-3747d-default-rtdb.firebaseio.com/todos.json`, payload)
    .then((response) => response.data)
}
export const deleteTask = (id:string) => {
  return axios.delete(`https://todotest-3747d-default-rtdb.firebaseio.com/todos/${id}.json`,)
    .then((response) => response.data)
}
export const updateTask = (id: string, payload: itemType) => {
  return axios.put(`https://todotest-3747d-default-rtdb.firebaseio.com/todos/${id}.json`,payload)
    .then((response) => response.data)
}