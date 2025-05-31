// src/components/CommandButtons.jsx
const commands = [
  "awards",
  "certifications",
  "contact",
  "github",
  "help",
  "linkedin",
  "neofetch",
  "experience",
  "projects",
  "resume",
  "skills",
  "whoami",
];

const CommandButtons = ({ executeCommand }) => {
  const handleClick = (cmd) => {
    if (executeCommand?.current) {
      executeCommand.current.executeCommand(cmd);
    }
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
