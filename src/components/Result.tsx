interface ResultProps {
  score: number;
  total: number;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ score, total, onReset }) => {
  return (
    <div className="relative bg-[#2a2a40] p-6 rounded-2xl w-full max-w-md border-4 border-transparent text-center [box-shadow:0_0_0_4px_rgba(255,255,255,0.1)] [background:linear-gradient(#2a2a40,#2a2a40)_padding-box,linear-gradient(45deg,#ff6f61,#f0e130)_border-box]">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2a2a40] border-4 border-transparent rounded-full px-3 py-1 text-white text-lg font-bold [background:linear-gradient(#2a2a40,#2a2a40)_padding-box,linear-gradient(45deg,#ff6f61,#f0e130)_border-box]">
        🏆
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">Quiz Finished!</h2>
      <p className="text-lg text-gray-300 mb-6">
        Your Score: {score} out of {total}
      </p>
      <button
        onClick={onReset}
        className="bg-transparent border-2 border-gray-500 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition duration-200 text-lg"
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;