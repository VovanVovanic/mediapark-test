import React from 'react';
import styles from './app.module.scss';
import Todos from './todos/todos';

function App() {
  return (
    <div className={styles.app}>
     <Todos />
    </div>
  );
}

export default App;
