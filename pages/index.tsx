import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const [percent, setPercent] = useState(0);
  const [sentiment, setSentiment] = useState("");

  const analyze = async () => {
    const response = await axios.post("/api/analyze", { text });

    const { percent, sentiment } = await response.data;
    setPercent(percent);
    setSentiment(sentiment);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container flex items-center justify-center w-full h-full mx-auto">
      <div className="flex flex-col w-full p-8 space-y-8 bg-gray-700 shadow-lg rounded-3xl shadow-gray-700 lg:w-1/2">
        <h1 className="text-4xl font-bold text-gray-100">Sentiment Analysis</h1>
        <textarea
          onChange={onTextChange}
          value={text}
          className="w-full p-4 text-2xl text-gray-100 bg-gray-800 disabled:bg-gray-500"
          placeholder="Enter text here to analyze"
        />
        <button className="p-4 bg-green-500 text-2xl" onClick={analyze}>
          Analyze
        </button>
        <div
          className={`flex justify-center space-x-4 text-3xl p-4 ${
            sentiment === "negative" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          <span>{percent}%</span>
          <span>{sentiment}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
