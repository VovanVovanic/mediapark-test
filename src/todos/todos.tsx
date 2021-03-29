import React from 'react'
import { useSelector } from 'react-redux'
import { itemType } from '../redux/reducers/todos'
import { RootStateType } from '../redux/store'
import styles from './todos.module.scss'

const Todos = () => {

  const todoList = useSelector<RootStateType, Array<itemType>>((state) => state.todos.todos);
  console.log(todoList);
  
  return (
    <>
      <h1>TODO LIST</h1>
      <ul className={styles.todos}></ul>
    </>
  );
}
export default Todos