// import { useState } from "react";
import styles from "./styles.module.css";

const ChatForm = ({ message, setMessage, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.textInput}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </form>
  );
};

export default ChatForm;
