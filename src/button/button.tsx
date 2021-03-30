import React from 'react'
import styles from './button.module.scss'

type buttonType = {
  children: React.ReactNode;
  onClick: ()=>void
};

const Button:React.FC<buttonType> = ({ children, onClick }) => {
  return (
    <button
      className={styles.button}
    onClick={onClick}>
      {children}
    </button>
  )
}
export default Button