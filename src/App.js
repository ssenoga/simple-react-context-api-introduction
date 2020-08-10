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

  const handleDelete = (key) => {
    dispatch({
      type: "DELETE_MESSAGE",
      index: key
    });
  };

  return (
    <div>
      <ul>
        {messages?.map((message, index) => (
          <li
            key={message}
            onClick={(e) => {
              e.preventDefault();
              handleDelete(index);
            }}>
            {message}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button disabled={!message} onClick={handleClick}>
        Send
      </button>
    </div>
  );
}
