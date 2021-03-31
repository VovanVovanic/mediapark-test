import axios from "axios"
import { dataType } from "../login/loginForm"

export const register = (data: dataType) => {
  const payload = { ...data, returnSecureToken: true }
  console.log(payload);
  
  return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDrVAch5O5F0nlHLgH_ex0ny_2GwbrN-Zs`,payload).then((res)=>res)
}

export const login = (data: dataType) => {
  const payload = { ...data, returnSecureToken: true }
  return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDrVAch5O5F0nlHLgH_ex0ny_2GwbrN-Zs `, payload).then((res)=>res)
}