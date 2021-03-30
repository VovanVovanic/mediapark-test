import React, { useState } from 'react'
import Button from '../button/button'
import styles from './filter.module.scss'

export type filterType = 'all' | 'done' | 'todo' | 'important'
type filterFormType = {
  filterValueChange: (filter: filterType) => void;
};
const FilterForm: React.FC<filterFormType> = ({ filterValueChange }) => {
  const [active, setActive] = useState<filterType>('all')
  
  const onClickHandler = (filter: filterType) => {
    filterValueChange(filter);
    setActive(filter)
  };

  const btns = [
    { name: "all" },
    { name: "done" },
    { name: "todo" },
    { name: "important" },
  ].map((el) => {
    let isActive = el.name === active;
    return (
      
      <Button
        key={el.name}
        onClick={() => onClickHandler(el.name as filterType)}
        type="text"
        status={isActive}
      >
        {el.name}
      </Button>
    );
  });
  return (
    <>
      <div className={styles.filterForm}>
      </div>
      <div className={styles.buttons}>
        <h4>Filter tasks by: </h4>
        <div className={styles.filterBtns}>{btns}</div>
      </div>
    </>
  );
};
export default FilterForm