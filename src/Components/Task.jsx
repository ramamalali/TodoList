import "./Task.css";
import { useContext } from "react";
import { todosContext } from "../Context/todosContext";
import { useToast } from "../Context/ToastContext";
import todosReducer from '../Reducers/todosReducer'

import * as React from "react";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Task({ todo, openDeleteDialog, openUpdateDialog }) {
  const { todos2, SetTodos } = useContext(todosContext);
  const {todos , dispatch} = useContext(todosContext);
  const { ShowHideToast } = useToast();


  /* delete prop */
  function handleDialogeDeleteProp() {
    openDeleteDialog(todo);
  }
  /* /////update prop//// */
  function handleDialogeUpdateProp() {
    openUpdateDialog(todo);
  }

  /* checked todo */
  function handleChecked() {

    dispatch({type : "checked" , payload :   todo})

    ShowHideToast("This Task has checked");
  }

  return (
    <>
      <div className="task">
        <span className="task-icons">
          <button
            className="taskicons-style"
            onClick={() => {
              handleDialogeDeleteProp();
            }}
          >
            <DeleteOutlineIcon />
          </button>

          <button
            className="taskicons-style"
            onClick={() => {
              handleDialogeUpdateProp();
            }}
          >
            <CreateIcon />
          </button>

          <button
            className="taskicons-style"
            onClick={() => {
              handleChecked();
            }}
            style={{ backgroundColor: todo.isComplate ? "green" : " white" }}
          >
            <CheckCircleIcon />
          </button>
        </span>

        <h1 className="task-title">{todo.title}</h1>
        <p className="task-title">{todo.desc}</p>
      </div>
    </>
  );
}
