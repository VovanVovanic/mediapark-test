import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.scss';
import Login from './login/loginForm';
import { autoLogin } from './redux/actions/auth';
import { RootStateType } from './redux/store';
import Spinner from './spinner/spinnes';
import Todos from './todos/todos';

function App() {
  const isLoading = useSelector<RootStateType, boolean>((state) => state.auth.isLoading)
  const isAuth = useSelector<RootStateType, string>((state)=>state.auth.token)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(autoLogin());
  },[])

  const isAuthorised = isAuth ? <Todos/> : <Login />
  return (
    <div className={styles.app}>
     {isLoading ? <Spinner/> : isAuthorised}
    </div>
  );
}

export default App;
