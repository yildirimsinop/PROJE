import styles from "./styles.module.css";

function ChatItem({ message }) {
  return (
    <div className={`${styles.chatItem}`}>
      {/* {`${item.id}. `} */}

      {message}
    </div>
  );
}

export default ChatItem;
