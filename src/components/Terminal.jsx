import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import Prompt from "./Prompt";
import { commands } from "../constants/commands.jsx";

const Terminal = forwardRef((props, ref) => {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const terminalRef = useRef(null); // Ref for terminal scroll container

  const executeCommand = (rawInput) => {
    const trimmed = rawInput.trim().toLowerCase();
    if (trimmed === "clear" || trimmed === "cls") {
      setHistory([]);
    } else {
      const cmd = commands[trimmed];
      let response;

      if (!cmd) {
        response = `Command not found: ${trimmed}`;
      } else if (typeof cmd === "string" || React.isValidElement(cmd)) {
        response = cmd;
      } else if (typeof cmd.render === "function") {
        response = cmd.render();
      } else {
        response = `Command not found: ${trimmed}`;
      }

      setHistory((prev) => [...prev, { command: trimmed, response }]);
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth", // 👈 Smooth scroll animation
      });
    }
  }, [history]);

  useImperativeHandle(ref, () => ({
    executeCommand,
  }));

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    }
  };

  return (
    <div
      ref={terminalRef}
      className="bg-black text-green-200 p-6 rounded-lg shadow-md border border-green-400 font-mono h-[500px] overflow-y-auto"
    >
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
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none outline-none ml-2 w-full text-green-200 caret-green-400"
          autoFocus
        />
      </div>
    </div>
  );
});

export default Terminal;
