import { Quiz } from "@/types/Quiz";
import { useState } from "react";

type Props = {
    question:Quiz;
    count: number;
    onAnswer: (answer: number) => void;
}


export const QuizB7 = ({question, count, onAnswer}:Props) => {

    const [selectedAnswer, setSelectedAnswer ] = useState<number | null>(null);

    const checkQuestion = (key: number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);
            onAnswer(key)
        }

    }


    return(
        <div>
            <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
            <div>
                {question.list.map((item, key) => (
                    <div
                    key={key}
                    onClick={()=> checkQuestion(key)}
                    className={`border px-3 py-2 rounded-md text-lg mb-4 cursor-pointer bg-blue-100 border-blue-300 

                        ${selectedAnswer !== null ? 'cursor-auto' : 'hover:opacity-60'}
                        ${selectedAnswer !== null && selectedAnswer === question.response && selectedAnswer === key && 'bg-green-100 border-green-300' }
                        ${selectedAnswer !== null && selectedAnswer !== question.response && selectedAnswer === key && 'bg-red-100 border-red-300' }
                        `}
                    >
                    {item}
                    </div>
                ))}
            </div>

        </div>
    );
}