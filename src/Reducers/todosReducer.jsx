import { v4 as uuidv4 } from "uuid";


export default function todosReducer(currentTodos , action){
    switch (action.type) {
        case "added":{
            const newObject = {
                id: uuidv4(),
                title: action.payload.newTitle,
                desc: "",
                isComplate: false,
              };

              const neewTodo = [...currentTodos , newObject];
              localStorage.setItem("taskUpdated", JSON.stringify(neewTodo));
              return neewTodo;
             
            }

        
        case "delete":{
           
            const newDeletedTodos = (currentTodos || []).filter((t) => {
                return t.id !== action.payload.dialog.id;
              });
              localStorage.setItem("taskUpdated", JSON.stringify(newDeletedTodos));
        
             return newDeletedTodos;
             
    }
        case "update":{
            const newTodoAfterUpdated = (currentTodos || []).map((f) => {
                if (f.id == action.payload.dialog.id) {
                  return {
                    ...f,
                    title: action.payload.dialog.title,
                    desc: action.payload.dialog.desc,
                  };
                } else {
                  return f;
                }
              });
              localStorage.setItem("taskUpdated", JSON.stringify(newTodoAfterUpdated));
             return newTodoAfterUpdated ;
             
    }
        case "checked":{
          const newToDo = (currentTodos || []).map((t) => {
            if (t.id == action.payload.id) {
              const updatedCheckedTodo = {
                ...t , isComplate : !t.isComplate
              }
              return updatedCheckedTodo;
            }
            return t;
          });
          localStorage.setItem("taskUpdated", JSON.stringify(newToDo));
           return newToDo;
             
    }

    case "getLocalstorage" :{
        const newAddTask = JSON.parse(localStorage.getItem("taskUpdated")) || [];
         return newAddTask;
    }
            default: {
                throw Error("unknown action" + action.type)
            }
     
        
        
    }
        return [];
    }

