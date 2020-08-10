import React from "react";
import { UseStateValue } from "./StateProvider";
// import {
//   BrowserRouter as Router,
//   useParams,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export default function App() {
  const [{ messages }] = UseStateValue();
  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
      <input type="text" />
      <button>Send</button>
    </div>
  );
}
