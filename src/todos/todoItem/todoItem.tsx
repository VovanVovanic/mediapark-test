import React from "react";
import Checkbox from "../checkbox/checkbox";
import styles from "./item.module.scss";

type listItemType = {
  label: string;
  isDone: boolean;
  important: boolean;
  id: string
};
const TodoItem: React.FC<listItemType> = ({ label, isDone, important, id }) => {
  return (
    <li className={styles.item}>
      <Checkbox
        label={label}
        id={id}
        checked={isDone}
      />
    </li>
  );
};
export default TodoItem;
