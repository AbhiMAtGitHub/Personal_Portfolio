// src/components/Prompt.jsx
import React from "react";

const Prompt = ({ command, response }) => {
  return (
    <div className="mb-2">
      <div><span className="text-green-500">$</span> {command}</div>
      <div className="ml-4">{response}</div>
    </div>
  );
};

export default Prompt;
