import React from 'react'
import styles from './message.module.scss'

const Message:React.FC<{text:string}> = ({ text }) => {
  return (
    <div className={styles.message}>{text}</div>
  )
}
export default Message