const Prompt = ({ command, response }) => {
  return (
    <div className="mb-2">
      <div className="text-green-500">
        Abhishek@portfolio:~$ <span className="text-green-400">{command}</span>
      </div>
      <div className="text-green-300">
        {typeof response === "string"
          ? response.split("\n").map((line, idx) => (
              <div key={idx}>{line}</div>
            ))
          : response}
      </div>
    </div>
  );
};

export default Prompt;
