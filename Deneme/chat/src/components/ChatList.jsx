import React from "react";
import styles from "./styles.module.css";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";

function ChatList() {
  const { data } = useChat();
  return (
    <div className={styles.chatlist}>
      <div>
        {data.map((item) => (
          <ChatItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
