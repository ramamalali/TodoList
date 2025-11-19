import { createContext, useReducer } from "react";
import todosReducer from "../Reducers/todosReducer";

export let todosContext = createContext([]);

export const TodosProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  return (
    <todosContext.Provider value={{ todos, dispatch }}>
      {children}
    </todosContext.Provider>
  );
};
