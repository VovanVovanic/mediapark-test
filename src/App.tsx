import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.scss';
import Login from './components/forms/login/loginForm';
import Todos from './components/todos/todos';
import Spinner from './components/ui/spinner/spinnes';
import { autoLogin } from './redux/actions/auth';
import { RootStateType } from './redux/store';


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
