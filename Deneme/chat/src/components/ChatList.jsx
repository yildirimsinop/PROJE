import React from "react";
import styles from "./styles.module.css";
// import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";

function ChatList({ messages }) {
  // const { data } = useChat();
  return (
    <div className={styles.chatlist}>
      <div>
        {messages.map((message, index) => (
          <ChatItem key={index} message={message} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
