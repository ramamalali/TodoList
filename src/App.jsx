import Home from "./Home";
import "./App.css";
import { useState } from "react";
import { TodosProvider } from "./Context/todosContext";
import { todosContext } from "./Context/todosContext";
import { ToastProvider } from "./Context/ToastContext";
import { v4 as uuidv4 } from "uuid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const inisialTodo = [
  {
    id: uuidv4(),
    title: " قراءة 3 كتب",
    desc: " الانجاز قبل نهاية الشهر ",
    isComplate: false,
  },
  {
    id: uuidv4(),
    title: "فهم تفاصيل الجافاسكربت",
    desc: " الانجاز قبل نهاية الشهر",
    isComplate: false,
  },
  {
    id: uuidv4(),
    title: "انجاز مشروع قائمة المهام",
    desc: " الانجاز قبل نهاية الشهر ",
    isComplate: false,
  },
];

const theme = createTheme({
  typography: {
    fontFamily: ["font1"],
  },
  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});

export default function App() {
  const [todos, SetTodos] = useState(inisialTodo);

  return (
    <>
      <ToastProvider>
        <ThemeProvider theme={theme}>
          <TodosProvider>
            <Home />
          </TodosProvider>
        </ThemeProvider>
      </ToastProvider>
    </>
  );
}
