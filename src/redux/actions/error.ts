import { Dispatch } from "redux"
import { setMessage } from "./auth"

export const onErrorMsgCommon = (e: any, dispatch: Dispatch) => {
  let msg = e.response.data.error.message
  dispatch(setMessage(msg))
    setTimeout(() => {
      dispatch(setMessage(''))
    },2000)
}