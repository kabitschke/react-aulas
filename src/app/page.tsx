"use client"

import { QuizB7 } from "@/components/QuizB7";
import { QuizList } from "@/components/QuizList";
import { quizList } from "@/data/quizList";
import { useState } from "react";

  

const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = 'Quiz de perguntas';

  const handleAnswer = (answer: number) => {

  }

  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center items-center">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
          <div className="p-5">
            <QuizB7 question={quizList[currentQuestion] }
            count={currentQuestion +1 }
            onAnswer={handleAnswer}
            />
          </div>
          <div className="p-5 text-center border-t border-gray-300">
            {currentQuestion + 1} de {quizList.length} pergunta{quizList.length === 1 ? '' : 's'}
          </div>
      </div>
    </div>

  );
}

export default page;