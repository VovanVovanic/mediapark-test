import React from 'react'
import styles from './button.module.scss'

type buttonType = {
  children: React.ReactNode;
  onClick: () => void
  type?: string
  status?: boolean
};

const Button: React.FC<buttonType> = ({ children, onClick, type, status }) => {

  const clss = [
    styles.button
  ]
  type && clss.push(styles.text)
  status && clss.push(styles.active)
  type === 'logout' && clss.push(styles.logout)
  return (
    <button
      className={clss.join(' ')}
      onClick={onClick}>
      {children}
    </button>
  )
}
export default Button