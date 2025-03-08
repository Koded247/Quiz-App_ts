import { useState, useEffect } from 'react';
import { questions, QuizQuestion } from '../data/questions';
import Question from './Question';

interface QuizProps {
  onFinish: (score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ onFinish }) => {
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<boolean[]>(new Array(20).fill(false)); // Track answered questions

  useEffect(() => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setCurrentQuestions(shuffled.slice(0, 20));
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === currentQuestions[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
    // Mark this question as answered
    const newAnswered = [...answered];
    newAnswered[currentIndex] = true;
    setAnswered(newAnswered);
  };

  const handleNext = () => {
    if (currentIndex + 1 < currentQuestions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(score);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (currentQuestions.length === 0) return (
    <div className="text-white text-lg">Loading...</div>
  );

  return (
    <div className="relative bg-[#2a2a40] p-6 rounded-2xl w-full max-w-md border-4 border-transparent [box-shadow:0_0_0_4px_rgba(255,255,255,0.1)] [background:linear-gradient(#2a2a40,#2a2a40)_padding-box,linear-gradient(45deg,#ff6f61,#f0e130)_border-box]">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#2a2a40] border-4 border-transparent rounded-full px-3 py-1 text-white text-lg font-bold [background:linear-gradient(#2a2a40,#2a2a40)_padding-box,linear-gradient(45deg,#ff6f61,#f0e130)_border-box]">
        {currentIndex + 1}
      </div>
      <Question question={currentQuestions[currentIndex]} onAnswer={handleAnswer} />
      <p className="text-sm text-gray-400 mt-4 text-center">
        Question {currentIndex + 1} of {currentQuestions.length}
      </p>
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="bg-transparent border-2 border-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={answered[currentIndex] === false && currentIndex < currentQuestions.length - 1}
          className="bg-transparent border-2 border-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition duration-200 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;