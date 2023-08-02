import styles from "./styles.module.css";

function ChatItem({ item }) {
  return <div className={styles.ChatItem}>{item.messages}</div>;
}

export default ChatItem;
