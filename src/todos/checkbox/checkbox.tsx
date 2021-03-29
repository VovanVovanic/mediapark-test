import React, { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../redux/actions/todos'
import styles from './checkbox.module.scss'

type checkboxType = {
  label: string
  checked: boolean
  id: string
}
const Checkbox: React.FC<checkboxType> = ({ label, checked, id }) => {
  const dispatch = useDispatch()
  
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatus(id, e.currentTarget.checked));
  };
  const cls = [
    styles.label
  ]
  checked && cls.push(styles.done)
  return (
    <label className={cls.join(' ')}>
      <input
        type="checkbox"
        checked={checked}
        className={styles.checkbox}
        onChange={onChangeHandler}
      />
      {label}
    </label>


  )
}
export default Checkbox