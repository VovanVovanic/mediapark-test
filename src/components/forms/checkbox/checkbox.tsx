import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchUpdateTask } from '../../../redux/actions/todos'
import styles from './checkbox.module.scss'

type checkboxType = {
  label: string
  checked: boolean
  id: string
  important: boolean
}
const Checkbox: React.FC<checkboxType> = ({ label, checked, id, important }) => {
  const dispatch = useDispatch()

  const onChangeHandler = () => {
    dispatch(fetchUpdateTask(id, 1));
  };
  const cls = [
    styles.label
  ]
  checked && cls.push(styles.done)
  important && cls.push(styles.important)
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