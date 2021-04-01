import React, { ChangeEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import styles from './searchForm.module.scss'


type searchFormType = {
  onSearch: (value: string) => void
}
const SearchForm: React.FC<searchFormType> = ({ onSearch }) => {
  const [value, setValue] = useState<string>('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.currentTarget.value)
    setValue(e.currentTarget.value);
  };
  return (
    <>
      <div className={styles.searchForm}>
        <input
          type={"text"}
          placeholder={"type here to find the task"}
          className={styles.searchInput}
          value={value}
          onChange={onChangeHandler}
        />

        <FaSearch style={{ color: 'grey' }} />

      </div>
    </>
  );
}
export default SearchForm