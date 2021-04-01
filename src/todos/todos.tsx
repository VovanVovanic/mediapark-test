import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemType } from '../redux/reducers/todos'
import { RootStateType } from '../redux/store'
import TodoItem from './todoItem/todoItem'
import styles from './todos.module.scss'
import AddItemForm from '../addItemForm/addItemForm'
import FilterForm, { filterType } from '../filterForm/filterForm'
import SearchForm from '../searchForm/searchForm'
import { fetchGetTasks } from '../redux/actions/todos'
import Spinner from '../spinner/spinnes'
import Message from '../message/message'
import Button from '../button/button'
import { logout } from '../redux/actions/auth'


const Todos = () => {
  const [filter, setFilter] = useState<filterType>('all')
  const [search, setSearch] = useState<string>('')
  const todoList = useSelector<RootStateType, Array<itemType>>((state) => state.todos.todos)
  const isLoading = useSelector<RootStateType, boolean>((state) => state.todos.loading)
  const message = useSelector<RootStateType, string>((state) => state.todos.error)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGetTasks());
  }, [])

  const onLogout = () => {
    dispatch(logout())
    dispatch(fetchGetTasks())
  }

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
  const resultFilter = onFilter(filter, todoList)

  const resultSearch = (value: string, arr: Array<itemType>) => {
    if (!value) { return arr }
    return arr.filter((el) => {
      return el.label.toLowerCase().indexOf(value.toLowerCase()) > -1
    })
  }

  const onSearch = (value: string) => {
    setSearch(value)
  };

  const mappedResult = resultSearch(search, resultFilter).map(
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
      {message ? (
        <Message text={message} />
      ) : (
        <>
          <SearchForm onSearch={onSearch} />
          <FilterForm filterValueChange={filterValueChange} />
          <ul className={styles.todos}>
            {isLoading ? <Spinner /> : mappedResult}
          </ul>
          <AddItemForm />
        </>
      )}
      <Button onClick={onLogout} type={"logout"}>
        Logout
      </Button>
    </div>
  );
}
export default Todos