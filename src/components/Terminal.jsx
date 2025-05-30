import React, { useState } from "react";
import Prompt from "./Prompt";
import { commands } from "../constants/commands.jsx";

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const trimmed = input.trim().toLowerCase();
      if (trimmed === "clear" || trimmed === "cls") {
        setHistory([]);
      } else {
        const response = commands[trimmed] || `Command not found: ${trimmed}`;
        setHistory([...history, { command: trimmed, response }]);
      }
      setInput("");
    }
  };

  return (
    <div className="bg-black text-green-200 p-6 rounded-lg shadow-md border border-green-400 font-mono h-[500px] overflow-y-auto">
      <div className="text-green-800 mb-4 italic">
        Welcome to Abhishek's Portfolio. Type 'help' to see available commands
      </div>

      {history.map((item, idx) => (
        <Prompt key={idx} command={item.command} response={item.response} />
      ))}

      <div className="flex items-center mt-2">
        <span className="text-green-500">Abhishek@portfolio:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none ml-2 w-full text-green-200 caret-green-400"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
