// src/constants/commands.js
import React from "react";

export const commands = {
  help: (
    <div>
      <div className="text-green-300">Available commands:</div>
      <ul className="ml-4 list-disc">
        <li><strong>help</strong> – Show available commands</li>
        <li><strong>about</strong> – About me</li>
        <li><strong>projects</strong> – Show project list</li>
        <li><strong>clear</strong> – Clear terminal</li>
      </ul>
    </div>
  ),
  about: (
    <div>
      <p>👋 Hi, I'm <span className="text-green-300 font-bold">Vijay</span>.</p>
      <p>I’m a developer who loves building terminal UIs and smart systems.</p>
    </div>
  ),
  projects: (
    <ul className="ml-4 list-decimal">
      <li>Terminal Portfolio 🌐</li>
      <li>RAG Chatbot 🤖</li>
      <li>AWS Data Pipelines ☁️</li>
    </ul>
  ),
};
