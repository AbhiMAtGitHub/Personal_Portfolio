// src/constants/commands.jsx
import experience from "./experience";

export const commands = {
  help: (
    <div className="text-green-300 space-y-4">
      <div>
        <span className="font-bold">💻 System Commands:</span>
        <ul className="ml-4 list-none">
          <li>
            <strong>help</strong> – Show available commands
          </li>
          <li>
            <strong>clear</strong> – Clear the terminal
          </li>
          <li>
            <strong>neofetch</strong> – Display system info (Arch Linux style)
          </li>
        </ul>
      </div>

      <div>
        <span className="font-bold">👤 Personal Information:</span>
        <ul className="ml-4 list-none">
          <li>
            <strong>whoami</strong> – Display my identity
          </li>
          <li>
            <strong>about</strong> – Display about information
          </li>
          <li>
            <strong>skills</strong> – Show my technical skills
          </li>
          <li>
            <strong>projects</strong> – List my featured projects
          </li>
          <li>
            <strong>awards</strong> – Display my achievements
          </li>
          <li>
            <strong>others</strong> – Show my management/soft skills
          </li>
          <li>
            <strong>certifications</strong> – Show my certifications
          </li>
          <li>
            <strong>contact</strong> – Get my contact details
          </li>
        </ul>
      </div>

      <div>
        <span className="font-bold">🌐 Online Profiles:</span>
        <ul className="ml-4 list-none">
          <li>
            <strong>linkedin</strong> – Open my LinkedIn profile
          </li>
          <li>
            <strong>github</strong> – Open my GitHub profile
          </li>
          <li>
            <strong>leetcode</strong> – Open my LeetCode profile
          </li>
        </ul>
      </div>

      <div>
        <span className="font-bold">📄 Documents:</span>
        <ul className="ml-4 list-none">
          <li>
            <strong>resume</strong> – Download my resume
          </li>
        </ul>
      </div>
    </div>
  ),
  whoami:
    "Hi, I'm Abhishek — a passionate full-stack developer exploring backend, cloud, and GenAI 🚀",

  about: (
    <div>
      <p>
        👋 Hi, I'm <span className="text-green-300 font-bold">Abhishek</span>.
      </p>
      <p>
        I'm a Software Developer with nearly two years of experience building
        scalable backend systems and delivering end-to-end solutions. I
        specialize in designing microservices and RESTful APIs using Node.js and
        Express.js, working with event-driven architectures powered by Kafka,
        and deploying applications on AWS with Docker and CI/CD pipelines. I've
        also worked on real-time data pipelines and backend integrations,
        including projects involving Master Data Management (MDM) platforms.{" "}
      </p>
      <br />
      <p>
        Alongside backend development, I've gained solid experience with ReactJS
        and TypeScript, allowing me to build full-stack features and deliver
        polished user experiences. Whether it's architecting backend systems,
        handling cloud deployments, or crafting frontend interfaces - I take
        pride in owning what I build and making it reliable.
      </p>{" "}
      <br />
      <p>
        Lately, I've been exploring the world of Generative AI and have enjoyed
        building intelligent apps using frameworks like LangChain. I'm always
        excited by opportunities where I can solve real problems, work with
        great teams, and keep pushing myself to grow as a developer.
        <br />
        <br />
        <p>
          Let's connect and see what we can create together!
          <br />
          📩abhishekm10476@gmail.com
        </p>
      </p>
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
  linkedin: {
    description: "Open LinkedIn profile",
    render: () => {
      // Open LinkedIn in a new tab
      if (typeof window !== "undefined") {
        window.open(
          "https://www.linkedin.com/in/abhishek-m-061269225",
          "_blank"
        );
      }
      return (
        <span>
          Opening{" "}
          <span className="underline font-bold">
            LinkedIn/abhishek-m-061269225
          </span>
          ...
        </span>
      );
    },
  },
  resume: {
    description: "Download my resume",
    render: () => {
      if (typeof window !== "undefined") {
        const link = document.createElement("a");
        link.href = "/resume.pdf"; // Path relative to public/
        link.download = "Abhishek_Resume.pdf"; // Optional: Rename on download
        link.click();
      }

      return (
        <span>
          Downloading{" "}
          <span className="underline font-bold">Abhishek_Resume.pdf</span>...
        </span>
      );
    },
  },
  others: {
    description: "Show my management and soft skills",
    render: () => (
      <div className="text-green-300 space-y-4">
        <div>
          <span className="font-bold underline">🧠 Soft Skills:</span>
          <ul className="ml-4 list-disc">
            <li>
              Rapid learner with a strong ability to adapt to new technologies
              and environments.
            </li>
            <li>
              Excellent written and verbal communication skills, ensuring smooth
              collaboration.
            </li>
            <li>
              Proactive problem solver who enjoys tackling challenges with
              creativity and logic.
            </li>
            <li>
              Highly organized and detail-oriented, maintaining clarity even
              under pressure.
            </li>
            <li>
              Effective in cross-functional collaboration and open to feedback
              for continuous growth.
            </li>
          </ul>
        </div>

        <div>
          <span className="font-bold underline">🧑‍💼 Management Skills:</span>
          <ul className="ml-4 list-disc">
            <li>
              Demonstrated ownership of end-to-end project delivery in
              fast-paced environments.
            </li>
            <li>
              Experienced in Agile methodologies with regular sprint planning
              and retrospectives.
            </li>
            <li>
              Strong time management and prioritization to ensure deadlines are
              consistently met.
            </li>
            <li>
              Comfortable leading technical discussions and mentoring junior
              team members.
            </li>
            <li>
              Collaborated with cross-functional teams including QA, DevOps, and
              Product Owners.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  github: {
    description: "Open GitHub profile",
    render: () => {
      // Open GitHub in a new tab
      if (typeof window !== "undefined") {
        window.open("https://github.com/AbhiMAtGitHub", "_blank");
      }
      return (
        <span>
          Opening{" "}
          <span className="underline font-bold">GitHub/AbhiMAtGitHub</span>
          ...
        </span>
      );
    },
  },
  neofetch: {
    description: "Display system info (neofetch style)",
    alias: ["neofetch"],
    render: () => (
      <pre className="text-green-300 whitespace-pre-wrap">
        {`
       /\\       
      /  \\      
     / /\\ \\     
    / ____ \\    
   /_/    \\_\\   

User: Abhishek M
OS: Arch Linux
Hostname: abhishek.in
Time: ${new Date().toLocaleTimeString()}
Email: abhishekm10476@gmail.com
GitHub: gitHub.com/AbhiMAtGitHub
LinkedIn: linkedin.com/in/abhishek-m-061269225
`}
      </pre>
    ),
  },
  awards: {
    description: "Show awards and recognitions",
    render: () => (
      <div className="text-green-200">
        <p className="font-bold text-green-400 mb-1">
          🏆 Team Excellence Award - Torry Harris Integration Solutions
        </p>
        <p className="italic text-sm text-green-300 mb-2">
          Presented: November 2024
        </p>
        <p>
          Awarded for taking end-to-end ownership of production support and
          delivery for business-critical APIs and real-time data streaming
          systems. Played a key role in ensuring smooth operations, proactive
          issue resolution, and timely communication across teams, which
          contributed significantly to the success of multiple high-priority
          releases in a fast-paced production environment. This award was
          presented by BT, the client, for my significant contributions to their
          data transformation initiatives.
        </p>
      </div>
    ),
  },
  contact: {
    description: "Show contact information",
    render: () => (
      <div className="text-green-200 space-y-1">
        <p>
          <span className="text-green-400 font-semibold">📧 Email:</span>{" "}
          abhishekm10476@gmail.com
        </p>
        <p>
          <span className="text-green-400 font-semibold">📍 Location:</span>{" "}
          Bangalore, India
        </p>
        <p>
          <span className="text-green-400 font-semibold">📞 Phone:</span>{" "}
          +91-9480985396
        </p>
        <p>
          <span className="text-green-400 font-semibold">🔗 LinkedIn:</span>{" "}
          <a
            href="https://www.linkedin.com/in/abhishek-m-061269225/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-green-300"
          >
            linkedin.com/in/abhishek-m-061269225
          </a>
        </p>
      </div>
    ),
  },
  certifications: {
    description: "Show my certifications",
    render: () => (
      <div className="text-green-300 space-y-4">
        <div>
          <span className="font-bold">
            📄 AWS Certified Cloud Practitioner (CLF-C02)
          </span>
          <p className="ml-4">
            This certification validates my understanding of AWS core services,
            global infrastructure, and pricing models. I leveraged this
            knowledge while deploying backend services and real-time data
            pipelines using AWS tools like EC2, S3, SQS, and Lambda. It helped
            me build scalable solutions and optimize cost while maintaining
            performance.
          </p>
        </div>
        <div>
          <span className="font-bold">📄 Reltio MDM Technical Consultant</span>
          <p className="ml-4">
            This certification reflects my hands-on expertise in configuring and
            integrating Reltio MDM. I worked on ingesting, transforming, and
            managing large-scale master data, designing data models, and
            building backend APIs to interact with Reltio entities. It was
            crucial for my role in delivering clean, connected customer data for
            the BT client.
          </p>
        </div>
      </div>
    ),
  },
  experience,
  leetcode: {
    description: "Open LeetCode profile",
    render: () => {
      // Open LeetCode in a new tab
      if (typeof window !== "undefined") {
        window.open("https://leetcode.com/u/Abhi_Krishna_/", "_blank");
      }
      return (
        <span>
          Opening{" "}
          <span className="underline font-bold">LeetCode/Abhi_Krishna_</span>
          ...
        </span>
      );
    },
  },
};
