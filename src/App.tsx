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
  const auth = useSelector<RootStateType, boolean>((state)=>state.auth.isAuth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(autoLogin());
  },[])

  const isAuthorised = auth ? <Todos/> : <Login />
  return (
    <div className={styles.app}>
     {isLoading ? <Spinner/> : isAuthorised}
    </div>
  );
}

export default App;
