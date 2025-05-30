// src/constants/commands.js
import React from "react";

export const commands = {
  help: (
    <div>
      <div className="text-green-300">Available commands:</div>
      <ul className="ml-4 list-disc">
        <li>
          <strong>help</strong> – Show available commands
        </li>
        <li>
          <strong>about</strong> – About me
        </li>
        <li>
          <strong>projects</strong> – Show project list
        </li>
        <li>
          <strong>clear</strong> – Clear terminal
        </li>
      </ul>
    </div>
  ),
  about: (
    <div>
      <p>
        👋 Hi, I'm <span className="text-green-300 font-bold">Abhishek</span>.
      </p>
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
  skills: {
    description: "List my technical skills",
    render: () => (
      <div className="text-green-300">
        <div className="mb-2">- Backend Development</div>
        <div className="mb-2">- Python: Flask, FastAPI, discord.py</div>
        <div className="mb-2">
          - Java: Competitive Programming, JDA, Spring Boot (learning)
        </div>
        <div className="mb-2">
          - JavaScript: Mongoose, Express, Node.js, discord.js, passport.js
        </div>
        <div className="mb-2">- Database: MongoDB, MySQL</div>
        <div className="mb-2">- Version Control: Git</div>
        <div className="mb-2">- CI/CD: Docker, GitHub CI/CD</div>
        <div className="mb-2">- Cloud: Azure, AWS, GCP, Oracle Cloud</div>
        <div className="mb-2">
          - Tools: Postman, BurpSuite, Nmap, Cloudflared
        </div>
        <div className="mb-2">- OS: Arch Linux, Ubuntu, Windows</div>
      </div>
    ),
  },
};
