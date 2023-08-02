import styles from "./styles.module.css";

function ChatItem({ item }) {
  return (
    <div className={`${styles.chatItem}`}>
      {`${item.id}. `}

      <img src={item.image} alt={item.title} />
    </div>
  );
}

export default ChatItem;
