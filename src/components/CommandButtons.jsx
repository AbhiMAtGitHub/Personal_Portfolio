import React from "react";

const commands = [
  "awards",
  "clear",
  "exit",
  "github",
  "help",
  "linkedin",
  "neofetch",
  "others",
  "projects",
  "resume",
  "skills",
  "whoami",
];

const CommandButtons = () => {
  const handleClick = (cmd) => {
    const input = document.querySelector("input");
    input.value = cmd;
    input.focus();
    const enter = new KeyboardEvent("keydown", { key: "Enter" });
    input.dispatchEvent(enter);
  };

  return (
    <div className="h-full w-full grid grid-cols-2 gap-2">
      {commands.map((cmd) => (
        <button
          key={cmd}
          onClick={() => handleClick(cmd)}
          className="w-full bg-green-400 text-black font-mono py-2 rounded-md hover:bg-green-300 transition"
        >
          {cmd}
        </button>
      ))}
    </div>
  );
};

export default CommandButtons;
