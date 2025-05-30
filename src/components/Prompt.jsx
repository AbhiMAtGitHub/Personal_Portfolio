import React from "react";

const Prompt = ({ command, response }) => {
  return (
    <div className="mb-2">
      <div className="text-green-500">
        Abhishek@portfolio:~$ <span className="text-green-400">{command}</span>
      </div>
      <div className="text-green-300">{response}</div>
    </div>
  );
};

export default Prompt;
