// src/App.jsx
import React from "react";
import Terminal from "./components/Terminal";
import CommandButtons from "./components/CommandButtons";

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-black to-blue-950 p-6">
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl w-full items-stretch">
        <div className="flex-1">
          <Terminal />
        </div>
        <div className="w-full lg:w-[250px] flex flex-col">
          <CommandButtons />
        </div>
      </div>
    </div>
  );
};

export default App;
