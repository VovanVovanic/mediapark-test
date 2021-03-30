import React from 'react'
import { useSelector } from 'react-redux'
import { itemType } from '../redux/reducers/todos'
import { RootStateType } from '../redux/store'
import TodoItem from './todoItem/todoItem'
import { FaCheckSquare, FaListAlt, FaPlusSquare, FaStar, FaTrashAlt } from "react-icons/fa";
import styles from './todos.module.scss'

const Todos = () => {

  const todoList = useSelector<RootStateType, Array<itemType>>((state) => state.todos.todos)
    .map(({id, label, isDone, isImportant}) => {
      return (
        <TodoItem
          key={id}
          label={label}
          isDone={isDone}
          important={isImportant}
          id={id}
        />
      )
    })


  return (
    <div className={styles.wrapper}>
      <h1 className={styles.todosHeader}>Daily tasks</h1>
      
      
      <FaPlusSquare style={{ color: 'blue' }} />
      <FaCheckSquare style={{ color: 'black' }} />
      <FaListAlt style={{ color: 'black' }} />
      
      <ul className={styles.todos}>{todoList}</ul>
    </div>
  );
}
export default Todos