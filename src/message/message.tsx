import React from 'react'
import  './message.scss'

const Message:React.FC<{text:string}> = ({ text }) => {
  return (
    <span className={'message'}>{text}</span>
  )
}
export default Message