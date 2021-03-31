

import { Dispatch } from 'redux';
import { login, register } from '../../api/auth';
import { dataType } from './../../login/loginForm';
import { onErrorMsgCommon } from './error';

export const SET_LOADING = 'SET_LOADING'
export const SET_AUTH = 'SET_AUTH'
export const SET_MESSAGE = 'SET_MESSAGE'
export const SET_TOKEN = 'SET_TOKEN'
export const ON_SESSION_EXPIRED = 'ON_SESSION_EXPIRED'

export type authActionType = setLoadingType | setMessageType | setAuthType | setTokenType | removeTokenType

export type setLoadingType = ReturnType<typeof setAuthLoading>
export type setMessageType = ReturnType<typeof setMessage>
type setAuthType = ReturnType<typeof setAuth>
type setTokenType = ReturnType<typeof setToken>
type removeTokenType = ReturnType<typeof removeToken>

export const setAuthLoading = (loading: boolean) => {
  return { type: SET_LOADING, loading } as const
}
export const setMessage = (message: string) => {
  return { type: SET_MESSAGE, message } as const
}
export const setAuth = (auth: boolean) => {
  return { type: SET_AUTH, auth } as const
}

export const setToken = (token: string) => {
  return { type: SET_TOKEN, token } as const
}

export const removeToken = () => {
  return { type: ON_SESSION_EXPIRED } as const
}

export function onSessionExpired(expires: number) {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expires * 1000);
  };
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("localId");
  localStorage.removeItem("expiresIn");
  return {
    type: ON_SESSION_EXPIRED,
  };
}


export const fetchAuth = (data: dataType, fetchType: number) => async (dispatch: Dispatch) => {
  dispatch(setAuthLoading(true))
  try {
    const res = fetchType === 0 ? await register(data) : await login(data)

    fetchType === 0 && dispatch(setMessage('Welcome on board!'))
    fetchType !== 0 && dispatch(setAuth(true))

    const local = res.data
    let expiresIn = new Date(new Date().getTime() + local.expiresIn * 1000).toString();

    localStorage.setItem("token", local.idToken);
    localStorage.setItem("localId", local.localId);
    localStorage.setItem("expiresIn", expiresIn);

    dispatch(setToken(local.idToken));

    dispatch(onSessionExpired(local.expiresIn) as any);

    fetchType === 0 && setTimeout(() => {
      dispatch(setMessage(''))
      dispatch(setAuth(true))
    }, 2000)
  }
  catch (e) {
    onErrorMsgCommon(e, dispatch)
  }
  dispatch(setAuthLoading(false))
}


export function autoLogin() {

  return (dispatch: Dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {

      const expiresDate = new Date(localStorage.getItem("expiresIn") as string | number | Date);
      if (expiresDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(setToken(token));

        dispatch(onSessionExpired((expiresDate.getTime() - new Date().getTime()) / 1000) as any);
        dispatch(setAuth(true))
      }
    }
  };
}
