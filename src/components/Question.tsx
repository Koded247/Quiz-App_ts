import { QuizQuestion } from '../data/questions';

interface QuestionProps {
  question: QuizQuestion;
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  const optionLabels = ['a)', 'b)', 'c)', 'd)'];

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6 text-center">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="w-full flex items-center justify-start bg-transparent border-2 border-gray-500 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition duration-200 text-lg"
          >
            <span className="mr-4">{optionLabels[index]}</span>
            <span>{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;