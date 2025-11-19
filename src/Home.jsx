import * as React from "react";
import "./Home.css";
import { useState, useEffect, useContext , useReducer } from "react";
import { todosContext } from "./Context/todosContext";
import {  useToast } from "./Context/ToastContext";
import todosReducer from './Reducers/todosReducer'


import Task from "./Components/Task";

/* uuid */
import { v4 as uuidv4 } from "uuid";
/* mui */
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function Home() {
  const {todos , dispatch} = useContext(todosContext);

  const { todos2 , SetTodos } = useContext(todosContext);
  const { ShowHideToast } = useToast();

  const [todoInput, setTodoInput] = useState("");
  const [dialogParameterTodo, setDialogParameterTodo] = useState(null);
  const [desplaiedTodosType, setDesplaiedTodosType] = useState("all");
  const [open, setOpen] = React.useState(false);
  const [openUpdatedDialod, setOpenUpdatedDialod] = useState(false);





  /* tasks filltering */
  const taskIsComplated = (todos || []).filter((c) => {
    return c.isComplate;
  });
  const taskNonComplated = (todos || []).filter((c) => {
    return !c.isComplate;
  });
  let tasksTobeRender = todos;
  if (desplaiedTodosType == "complated") {
    tasksTobeRender = taskIsComplated;
  } else if (desplaiedTodosType == "non-complated") {
    tasksTobeRender = taskNonComplated;
  } else {
    tasksTobeRender = todos;
  }
  /*///////////// tasks filltering //////////*/

  /* delete dialog and storage */
  const handleClickOpen = (todo) => {
    setDialogParameterTodo(todo);
    setOpen(true);
  };
  const handleClickColse = () => {
    setOpen(false);
  };
  function handleDelete() {
    dispatch({type : "delete" , payload : {dialog : dialogParameterTodo}})

    setOpen(false);
    ShowHideToast("success Delated");
  }
  /* //////////delete dialog and storage //////////*/

  /* update dialog and storage*/
  const handleClickOpenUpdate = (todo) => {
    setDialogParameterTodo(todo);
    setOpenUpdatedDialod(true);
  };

  function handleClickAgreeOpenUpdateDialog() {
dispatch({type : "update" , payload :{dialog : dialogParameterTodo}})

    setOpenUpdatedDialod(false);
    ShowHideToast("success Updated");
  }
  /* open and close  editting dialog */
  const handleClickOpenUpdateDialog = () => {
    setOpenUpdatedDialod(true);
  };
  const handleClickColseOpenUpdateDialog = () => {
    setOpenUpdatedDialod(false);
  };
  /* //////////////update dialog and storage///////////////////// */

  const newInisialTodo = (tasksTobeRender || []).map((t) => {
    return (
      <Task
        key={t.id}
        todo={t}
        openDeleteDialog={handleClickOpen}
        openUpdateDialog={handleClickOpenUpdate}
      />
    );
  });

  /* add todo */
  function handleAddTask() {
    dispatch({type :"added" , payload : {newTitle: todoInput }});

    setTodoInput("");
    ShowHideToast("success Adding");
  }
  useEffect(() => {
  dispatch({type : "getLocalstorage" })
  }, []);
 
  /*/////////// add todo///////////// */

  return (
    <>
      {/* /////////////////////////////////// update///////////// */}
      <Dialog
        open={openUpdatedDialod}
        onClose={handleClickColseOpenUpdateDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"تعديل المهمة"}</DialogTitle>
        <DialogContent>
          <form id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="tite"
              name="title"
              label="title"
              type="text"
              fullWidth
              variant="standard"
              value={dialogParameterTodo?.title || ""}
              onChange={(event) => {
                setDialogParameterTodo({
                  ...dialogParameterTodo,
                  title: event.target.value,
                });
              }}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="desc"
              name="desc"
              label="desc"
              type="text"
              fullWidth
              variant="standard"
              value={dialogParameterTodo?.desc || ""}
              onChange={(event) => {
                setDialogParameterTodo({
                  ...dialogParameterTodo,
                  desc: event.target.value,
                });
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickColseOpenUpdateDialog}>Disagree</Button>
          <Button
            autoFocus
            onClick={() => {
              handleClickAgreeOpenUpdateDialog();
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      {/* delete dialog */}
      <Dialog
        open={open}
        onClose={handleClickColse}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickColse}>Disagree</Button>
          <Button onClick={handleDelete} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      {/* ////////// delete dialog///////////////// */}

      <div className="tasks-container">
        <h1>My Tasks</h1>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button onClick={() => setDesplaiedTodosType("all")}>الكل</Button>
          <Button onClick={() => setDesplaiedTodosType("complated")}>
            منجز
          </Button>
          <Button onClick={() => setDesplaiedTodosType("non-complated")}>
            غير منجز
          </Button>
        </ButtonGroup>

        <div
          className="tasks-cards"
          style={{ maxHeight: "70vh", overflow: "scroll" }}
        >
          {newInisialTodo}
        </div>

        <div className="input-field">
          <button
            onClick={() => {
              handleAddTask();
            }}
            color="primary"
          >
            {" "}
            إضافة{" "}
          </button>
          <input
            className="task-input"
            type="text"
            placeholder="عنوان المهمة"
            value={todoInput}
            onChange={(event) => {
              setTodoInput(event.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
