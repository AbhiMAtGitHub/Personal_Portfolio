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
  const [ghostText, setGhostText] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalRef = useRef(null);

  useImperativeHandle(ref, () => ({
    executeCommand,
  }));

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  // Update ghost suggestion when user types
  useEffect(() => {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) {
      setGhostText("");
      return;
    }

    const match = Object.keys(commands).find((cmd) => cmd.startsWith(trimmed));

    if (match && match !== trimmed) {
      setGhostText(match);
    } else {
      setGhostText("");
    }
  }, [input]);

  const executeCommand = (rawInput) => {
    const trimmed = rawInput.trim().toLowerCase();
    if (trimmed === "") return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === "clear" || trimmed === "cls") {
      setHistory([]);
      setCommandHistory([]);
      return;
    }

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
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
      setGhostText("");
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length === 0) return;
      const newIndex =
        historyIndex < commandHistory.length - 1
          ? historyIndex + 1
          : historyIndex;
      setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      setHistoryIndex(newIndex);
      setGhostText("");
    } else if (e.key === "ArrowDown") {
      if (commandHistory.length === 0) return;
      const newIndex = historyIndex > 0 ? historyIndex - 1 : -1;
      setInput(
        newIndex === -1
          ? ""
          : commandHistory[commandHistory.length - 1 - newIndex]
      );
      setHistoryIndex(newIndex);
      setGhostText("");
    } else if (e.key === "Tab") {
      e.preventDefault();
      if (ghostText) {
        setInput(ghostText);
        setGhostText("");
      } else {
        const trimmed = input.trim().toLowerCase();
        const matches = Object.keys(commands).filter((cmd) =>
          cmd.startsWith(trimmed)
        );
        if (matches.length > 1) {
          const suggestions = `Available commands:\n${matches
            .map((m) => `• ${m}`)
            .join("\n")}`;
          setHistory((prev) => [
            ...prev,
            { command: input, response: suggestions },
          ]);
        }
      }
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
        <span className="text-green-500 whitespace-nowrap">
          Abhishek@portfolio:~$
        </span>
        <div className="relative ml-2 w-full font-mono">
          <div className="absolute inset-0 pointer-events-none text-green-700">
            {/* Full ghost text with real input prefix and ghost suffix */}
            <span className="invisible">{input}</span>
            <span>{ghostText.slice(input.length)}</span>
          </div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none text-green-200 caret-green-400 w-full relative z-10"
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
});

export default Terminal;
