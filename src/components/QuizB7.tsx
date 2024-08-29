import { Quiz } from "@/types/Quiz";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

type Props = {
    question: Quiz;
    count: number;
    onAnswer: (answer: number) => void;
}

export const QuizB7 = ({ question, count, onAnswer }: Props) => {
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState<boolean | null>(null);

    const checkQuestion = (key: number) => {
        if (selectedAnswer === null) {
            setSelectedAnswer(key);
            const isCorrect = key === question.response;
            setCorrectAnswer(isCorrect);
            
            setTimeout(() => {
                onAnswer(key);
                setSelectedAnswer(null); // Zerando a resposta para ir para a próxima
                setCorrectAnswer(null);
            }, 1000);
        }
    }

    return (
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.list.map((item, key) => (
                    <div
                        key={key}
                        onClick={() => checkQuestion(key)}
                        className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer 
                        ${selectedAnswer !== null ? 'cursor-auto' : 'hover:opacity-60'}
                        ${selectedAnswer !== null && selectedAnswer === key && (correctAnswer ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300')}
                        `}
                    >
                        {selectedAnswer === key && (correctAnswer ? <FontAwesomeIcon icon={faCheck} className="text-green-500 ml-2 mr-2" /> : 
                            <FontAwesomeIcon icon={faTimes} className="text-red-500 ml-2 mr-2" />)}
                        {`${item}`}
                    </div>
                ))}
            </div>
        </div>
    );
}
