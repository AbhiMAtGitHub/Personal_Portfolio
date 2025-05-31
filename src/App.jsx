import React, { useRef } from "react";
import Terminal from "./components/Terminal";
import CommandButtons from "./components/CommandButtons";
import "./App.css";

const App = () => {
  const executeCommandRef = useRef(null);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-black to-blue-950 p-6">
      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl w-full items-stretch">
        <div className="flex-1">
          <Terminal ref={executeCommandRef} /> {/* ✅ Correctly assign the ref here */}
        </div>
        <div className="w-full lg:w-[250px] flex flex-col">
          <CommandButtons executeCommand={executeCommandRef} />
        </div>
      </div>
    </div>
  );
};

export default App;
