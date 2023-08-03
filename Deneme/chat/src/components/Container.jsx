import React, { useState } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

const Container = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);

    setMessage("");
  };

  return (
    <div className="App">
      <ChatList />

      <ChatForm
        message={message}
        setMessage={setMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Container;
