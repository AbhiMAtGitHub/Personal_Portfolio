// src/components/Terminal.jsx
import React, { useState } from "react";
import Prompt from "./Prompt";
import { commands } from "../constants/commands.jsx";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const trimmed = input.trim().toLowerCase();

      if (trimmed === "clear") {
        setHistory([]); // Clear terminal history
      } else {
        const response = commands[trimmed] || `Command not found: ${trimmed}`;
        setHistory([...history, { command: trimmed, response }]);
      }

      setInput("");
    }
  };

  return (
    <div className="terminal-container p-4 text-green-400 font-mono">
      {/* <Header /> */}
      <div className="terminal-header text-white mb-4">
        Welcome to Abhishek's Portfolio!
      </div>

      {history.map((item, index) => (
        <Prompt key={index} command={item.command} response={item.response} />
      ))}

      <div className="flex">
        <span className="text-green-500">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none text-green-400 ml-2 w-full caret-green-500"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
