import React from "react";
import Button from "../../button/button";
import Checkbox from "../checkbox/checkbox";
import {
  FaStar,
  FaTrashAlt,
} from "react-icons/fa";
import styles from "./item.module.scss";
import { useDispatch } from "react-redux";
import {fetchDeleteTask, fetchUpdateTask } from "../../redux/actions/todos";

type listItemType = {
  label: string;
  isDone: boolean;
  important: boolean;
  id: string 
};
const TodoItem: React.FC<listItemType> = ({ label, isDone, important, id }) => {
  const dispatch = useDispatch()

  const onChangeImportance = () => {
    dispatch(fetchUpdateTask(id, 0));
  }
  const onDeleteHandler = () => {
    dispatch(fetchDeleteTask(id));
  }
  return (
    <li className={styles.item}>
      <Checkbox label={label} id={id} checked={isDone} important={important}/>
      <div className={styles.buttons}>
        <Button onClick={onChangeImportance}>
          <FaStar style={{ color: "green" }} />
        </Button>
        <Button onClick ={onDeleteHandler}>
          <FaTrashAlt style={{ color: "red" }} />
        </Button>
      </div>
    </li>
  );
};
export default TodoItem;
