// src/constants/commands.jsx
import experience from "./experience";

export const commands = {
  help: (
    <div className="text-green-300 space-y-4">
      <div>
        <span className="font-bold">System Commands:</span>
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
        <span className="font-bold">Personal Information:</span>
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
        <span className="font-bold">Online Profiles:</span>
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
        <span className="font-bold">Documents:</span>
        <ul className="ml-4 list-none">
          <li>
            <strong>resume</strong> – Download my resume
          </li>
        </ul>
      </div>
    </div>
  ),
  whoami:
    "Hi, I’m Abhishek — a Generative AI engineer who builds intelligent backend systems powered by LLMs. I design scalable AI pipelines, work with agentic workflows, and integrate models with real-world enterprise data. I care about reliability, clean system design, and making AI systems actually work in production. Clean code, observability, and building things that scale — that’s my thing.",

  about: (
    <div>
      <p>
        Hi, I'm <span className="text-green-300 font-bold">Abhishek</span>.
      </p>
      <p>
        I'm a Generative AI Engineer with close to 3 years of experience
        building scalable backend systems and production-grade AI applications.
        I specialize in designing GenAI-powered solutions using LLMs, including
        Retrieval-Augmented Generation (RAG) pipelines, agentic workflows, and
        intelligent search systems for enterprise use cases.{" "}
      </p>
      <br />
      <p>
        In my current role, I work on developing backend systems that integrate
        LLMs with enterprise data to automate complex workflows and enhance
        decision-making. I have hands-on experience building APIs and
        microservices using Python and FastAPI, processing large-scale data
        using PySpark, and deploying applications on AWS using serverless
        architecture, Docker, and CI/CD pipelines.
      </p>{" "}
      <br />
      <p>
        I’ve also worked on intelligent document processing systems, developing
        pipelines that handle diverse data sources (PDFs, Excel, scanned
        documents) using tools like AWS Textract and LLM-based extraction.
        Additionally, I’ve built chatbot solutions integrated with Microsoft
        Teams using the Microsoft Bot Framework to enable seamless interaction
        with internal systems.
      </p>{" "}
      <br />
      <p>
        I enjoy working at the intersection of backend engineering and AI, where
        I can design reliable, scalable systems that solve real business
        problems. I’m always looking to deepen my understanding of GenAI systems
        and contribute to impactful, production-grade applications.
        <br />
        <br />
        <p>
          Let's connect and see what we can create together!
          <br />
          abhishekm10476@gmail.com
        </p>
      </p>
    </div>
  ),
  projects: {
    render: () => (
      <div>
        <div className="mb-4">
          <span className="text-green-400 font-bold">
            Quote Assist – AI-powered Product Recommendation System
          </span>{" "}
          <span className="text-green-300">
            [AWS Bedrock, LangChain, LangGraph, OpenSearch, AWS Lambda, SQS, S3,
            DynamoDB]
          </span>
          <p className="ml-6 mt-1 text-green-300">
            Built to address the manual and time-consuming process of generating
            product recommendations from Bills of Quantities (BOQs), this system
            enables internal sales and quotation teams to make faster and more
            accurate decisions. The solution leverages agentic RAG architectures
            to extract intent from complex documents and retrieve relevant
            products from large enterprise catalogs. It was implemented using
            hybrid search combining keyword and vector retrieval for improved
            semantic accuracy, and deployed as a cloud-native backend system
            using FastAPI and AWS services to ensure scalability and reliable
            performance in production environments.
          </p>
        </div>

        <div>
          <span className="text-green-400 font-bold">
            Greenwashing Detection – AI-driven Sustainability Claim Validator
          </span>{" "}
          <span className="text-green-300">
            [AWS Textract, AWS Comprehend, AWS Lambda, SQS, LangChain,
            LangSmith]
          </span>
          <p className="ml-6 mt-1 text-green-300">
            Developed to tackle the challenge of identifying misleading or
            unsupported sustainability claims in enterprise documents, this
            system helps improve transparency and trust in environmental
            reporting. The solution uses LLM-based analysis with multi-stage
            reasoning and validation pipelines to assess the credibility of
            claims and reduce hallucinations. It was built as a scalable backend
            application with integrated evaluation and monitoring using
            LangSmith, and deployed on AWS using a cloud-native architecture to
            ensure consistent and reliable performance.
          </p>
        </div>
      </div>
    ),
  },
  skills: {
    render: () => (
      <div className="text-green-300">
        <p>
          <span className="font-bold text-green-400">
            • Programming & Backend:
          </span>{" "}
          Python, SQL, JavaScript, FastAPI, Microservices
        </p>
        <p>
          <span className="font-bold text-green-400">• Generative AI:</span>{" "}
          OpenAI, Anthropic, LangChain, LangGraph, RAG, Prompt Engineering,
          Guardrails, Ollama, Hugging Face, AWS Bedrock
        </p>
        <p>
          <span className="font-bold text-green-400">• Data Engineering:</span>{" "}
          PySpark, AWS Glue, Kinesis, MSK
        </p>
        <p>
          <span className="font-bold text-green-400">
            • Search & Retrieval:
          </span>{" "}
          OpenSearch, Pinecone, Weaviate, ChromaDB
        </p>
        <p>
          <span className="font-bold text-green-400">
            • Cloud & Infrastructure:
          </span>{" "}
          AWS (Lambda, S3, API Gateway, CloudWatch, ECS), Docker, Terraform,
          GitHub Actions
        </p>
        <p>
          <span className="font-bold text-green-400">• Databases:</span>{" "}
          PostgreSQL, MySQL, DynamoDB, AWS RDS, Aurora
        </p>
        <p>
          <span className="font-bold text-green-400">• LLM Observability:</span>{" "}
          LangSmith (Tracing, Evaluation)
        </p>
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
          "_blank",
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
          <span className="font-bold underline">Soft Skills:</span>
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
          <span className="font-bold underline">Management Skills:</span>
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
          Team Excellence Award - Torry Harris Integration Solutions
        </p>
        <p className="italic text-sm text-green-300 mb-2">
          Presented: November 2024
        </p>
        <p>
          Awarded for owning the development of scalable, cloud-native AI
          backend systems supporting internal sales and quotation workflows.
          Architected and delivered production-ready GenAI solutions leveraging
          distributed microservices and retrieval-based pipelines, ensuring
          robustness, scalability, and operational excellence.
        </p>
      </div>
    ),
  },
  contact: {
    description: "Show contact information",
    render: () => (
      <div className="text-green-200 space-y-1">
        <p>
          <span className="text-green-400 font-semibold">Email:</span>{" "}
          abhishekm10476@gmail.com
        </p>
        <p>
          <span className="text-green-400 font-semibold">Location:</span>{" "}
          Bangalore, India
        </p>
        <p>
          <span className="text-green-400 font-semibold">Phone:</span>{" "}
          +91-9480985396
        </p>
        <p>
          <span className="text-green-400 font-semibold">LinkedIn:</span>{" "}
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
            AWS Certified Solutions Architect - Associate (SAA-C03)
          </span>
          <p className="ml-4">
            This certification validates my understanding of AWS cloud
            architecture, including core services, distributed systems, and cost
            optimization. I have applied these principles in architecting and
            deploying scalable, cloud-native backend systems for AI-driven
            applications using services such as AWS Lambda, Amazon S3, Amazon
            SQS, Amazon ECS, Amazon DynamoDB, Amazon OpenSearch, Amazon
            CloudWatch, and Amazon Aurora Serverless. Additionally, I have
            leveraged AWS AI/ML services such as Amazon SageMaker, Amazon
            Bedrock, Amazon Textract, and Amazon Comprehend to build and
            integrate intelligent, production-grade AI solutions, ensuring high
            availability, performance, and efficient resource utilization.
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
