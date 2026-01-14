# ✅ TodoList App (React + Vite)

A modern **ToDoList application** built with **React + Vite**, featuring state management with hooks, Material UI components, and task operations (add, edit, delete, mark as complete).  
The app provides a clean UI, responsive design, and interactive feedback using Snackbar notifications.

---

## ✨ Features
- ➕ **Add tasks** with unique IDs (using `uuid`).
- ✏️ **Edit tasks** inline with Material UI components.
- 🗑️ **Delete tasks** with confirmation feedback.
- ✅ **Mark tasks as completed** or revert to pending.
- 🔄 **Task filtering** with three buttons:
  - All tasks
  - Completed tasks
  - Pending tasks
- 🎉 **Snackbar notifications** for user actions (add, edit, delete, complete).
- ⚡ **Responsive UI** powered by Material UI.

---

## 🛠️ Technologies & Concepts
- **React + Vite** → fast development environment.
- **React Hooks**:
  - `useState` → manage local state.
  - `useReducer` → handle complex task state logic.
  - `useEffect` → side effects (e.g., saving tasks).
  - `useContext` → global state sharing across components.
  - **Custom Hook** → encapsulate reusable logic.
- **Material UI (MUI)** → styled components and Snackbar.
- **uuid** → generate unique IDs for tasks.

---
```
todolist-app/
│── public/
│── src/
│   ├── components/
│   │   ├── Buttons.jsx
│   │   ├── MySnackBar.jsx
│   │   ├── Task.jsx
│   │   └── TaskInput.jsx
│   ├── context/
│   │   ├── InputFieldContext.jsx
│   │   ├── ToastContext.jsx
│   │   └── todosContext.jsx
│   ├── Reducers/
│   │   └── todosReducer.jsx  
├── App.jsx
├── App.css
├── main.jsx
├── main.css
├── Home.jsx
├── Home.css
│── package.json
│── README.md
```
---
## Demo
()
---
## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/username/todolist-app.git
```

### 2.
```bash
cd todolist-app
```
### 3.
```bash
 npm install
```
### 4.
```bash
 npm run dev
```
---
This project is intended for training purposes. Feedback and suggestions are welcome
