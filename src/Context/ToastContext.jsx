import { createContext, useState, useContext } from "react";
import MySnackBar from "../Components/MySnackBar";
export let toastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function ShowHideToast(message) {
    setOpen(true);
    setMessage(message);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }

  return (
    <toastContext.Provider value={{ ShowHideToast }}>
      <MySnackBar open={open} message={message} />
      {children}
    </toastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(toastContext);
};
