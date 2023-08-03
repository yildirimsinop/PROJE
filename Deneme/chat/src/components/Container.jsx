import React, { useState } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import ChatItem from "./ChatItem";

const Container = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="App">
      <ChatItem message={message} />
      <ChatForm
        message={message}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
      />

      <ChatList messages={messages} />
    </div>
  );
};

export default Container;
