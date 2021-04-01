import { authActionType, ON_SESSION_EXPIRED, SET_LOADING, SET_MESSAGE, SET_TOKEN } from "../actions/auth"

type authStateType = typeof initState

const initState = {
  isLoading: false,
  message: '',
  token: ''
}
export const authReducer = (state: authStateType = initState, action: authActionType): authStateType => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.loading }
    case SET_MESSAGE:
      return { ...state, message: action.message }
    case SET_TOKEN:
      return { ...state, token: action.token }
    case ON_SESSION_EXPIRED:
      return{...state, token: ''}
    default: return state
  }
}