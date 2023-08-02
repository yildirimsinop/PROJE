import { createContext, useContext } from "react";
import data from "./data";

const ChatContext = createContext();
console.log(data);

export const ChatProvider = ({ children }) => {
  const values = {
    data,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
