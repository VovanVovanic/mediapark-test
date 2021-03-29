type authStateType = typeof initState

const initState = {
  isAuth: false,
  isLoading: false
}
export const authReducer = (state: authStateType = initState, action: any): authStateType => {
  switch (action.type) {
    default: return state
  }
}