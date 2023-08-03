import styles from "./styles.module.css";

function ChatItem({ item }) {
  return (
    <div className={`${styles.chatItem}`}>
      {`${item.id}. `}
      {item.title}
    </div>
  );
}

export default ChatItem;
