import React, { ChangeEvent, useState } from 'react'
import { FaPlusSquare } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import Button from '../button/button'
import { fetchCreateTasks } from '../redux/actions/todos'
import styles from './addItemForm.module.scss'

const AddItemForm = () => {
  const [value, setValue] = useState<string>('')
  const [error, setError] = useState<boolean>(false)

  const dispatch = useDispatch()

  const onAddItem = () => {
    if (!error) {
      if (value.trim() === '') {
        setValue('')
        return
      }
      const payload = {label: value, isDone: false, isImportant: false}
      dispatch(fetchCreateTasks(payload));
      setValue("");
    }

  }
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let text = e.currentTarget.value
    text.length > 50 ? setError(true) : setError(false)
    setValue(text)
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && onAddItem()
    e.key === 'Escape' && setValue('')
  };
  return (
    <>
      <div className={styles.addItemForm}>
        <input
          type={"text"}
          placeholder={"type here to add todo"}
          className={styles.addInput}
          value={value}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <Button onClick={onAddItem}>
          <FaPlusSquare style={{ color: "blue" }} />
        </Button>
      </div>
      {error && <span style={{ color: 'red' }}>Too long. Task name must be less then 50 characters length. </span>}
    </>
  );
}
export default AddItemForm