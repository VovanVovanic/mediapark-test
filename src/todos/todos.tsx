import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { itemType } from '../redux/reducers/todos'
import { RootStateType } from '../redux/store'
import TodoItem from './todoItem/todoItem'
import styles from './todos.module.scss'
import AddItemForm from '../addItemForm/addItemForm'
import FilterForm, { filterType } from '../filterForm/filterForm'


const Todos = () => {
  const [filter, setFilter] = useState<filterType>('all')

  const todoList = useSelector<RootStateType, Array<itemType>>((state) => state.todos.todos)


  const filterValueChange = (value: filterType) => {
    setFilter(value)
  }

  const onFilter = (fltr: filterType, arr: Array<itemType>) => {
    switch (fltr) {
      case 'all': return arr
      case 'done': return arr.filter((el) => el.isDone)
      case 'todo': return arr.filter((el) => !el.isDone)
      case 'important': return arr.filter((el) => el.isImportant)
      default: return arr
    }
  }
  const result = onFilter(filter, todoList).map(
    ({ id, label, isDone, isImportant }) => {
      return (
        <TodoItem
          key={id}
          label={label}
          isDone={isDone}
          important={isImportant}
          id={id}
        />
      );
    }
  );
  
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.todosHeader}>Daily tasks</h1>
      <FilterForm filterValueChange={filterValueChange} />
      <ul className={styles.todos}>{result}</ul>
      <AddItemForm />
    </div>
  );
}
export default Todos