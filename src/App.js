import React, { useState } from "react";
import { UseStateValue } from "./StateProvider";

export default function App() {
  const [{ messages }, dispatch] = UseStateValue();
  const [message, setMessage] = useState("");

  const handleClick = () => {
    dispatch({
      type: "ADD_MESSAGE",
      message: message
    });
    setMessage("");
  };

  return (
    <div>
      <ul>
        {messages?.map((message) => (
          <li key={message}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleClick}>Send</button>
    </div>
  );
}
