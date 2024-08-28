"use client"

import { QuizB7 } from "@/components/QuizB7";
import { Results } from "@/components/Results";
import { quizList } from "@/data/quizList";
import { useState } from "react";



const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const title = 'Quiz de perguntas';

  const loadNextQuestion = () => {
    if (quizList[currentQuestion + 1]) {//verificação para não ultrapassar a quantidade de itens do array

      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }


  }

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);//Duplica o array e passa a nova informação, recebe as repostas
    loadNextQuestion();//vai para próxima questão 

  }

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  }

  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center items-center">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">{title}</div>
        <div className="p-5">
          {
            !showResult &&

            <QuizB7 question={quizList[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswer}
            />
          }
          {
            showResult &&
            <div>
              <Results questions={quizList} answers={answers} />

            </div>
          }

        </div>
        <div className="p-5 text-center border-t border-gray-300">

          {
            !showResult &&
            <div>
              {`${currentQuestion + 1} de ${quizList.length} pergunta${quizList.length === 1 ? '' : 's'}`}

            </div>
          }

          {
            showResult &&
            <div>
              <button className="bg-blue-500 py-2 px-4 text-white rounded-md"
                onClick={resetQuiz}>Reiniciar Quiz</button>
            </div>
          }

        </div>
      </div>
    </div>

  );
}

export default page;