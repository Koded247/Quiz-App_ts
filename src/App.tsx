import { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';

const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleQuizFinish = (finalScore: number) => {
    setScore(finalScore);
    setIsQuizFinished(true);
  };

  const resetQuiz = () => {
    setScore(0);
    setIsQuizFinished(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {isQuizFinished ? (
        <Result score={score} total={20} onReset={resetQuiz} />
      ) : (
        <Quiz onFinish={handleQuizFinish} />
      )}
    </div>
  );
};

export default App;