"use client"
import { useState, useEffect } from "react";
import { QuizB7 } from "@/components/QuizB7";
import { Results } from "@/components/Results";
import { quizList } from "@/data/quizList";

const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [bar, setBar] = useState<number>(0);

  useEffect(() => {
    // Atualiza a barra de progresso com base no número de perguntas e na pergunta atual
    // setBar((currentQuestion +1) / quizList.length * 100);
    
    setBar(currentQuestion / (quizList.length -1) *100);
  }, [currentQuestion]);

  const loadNextQuestion = () => {
    if (quizList[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      setBar(0);
    }
  };

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  const resetQuiz = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center items-center">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="p-5 font-bold text-2xl border-b border-gray-300">Quiz de perguntas</div>
        <div className="bg-green-500 h-0.5 delay-100" style={{ width: `${bar}%` }}></div>
        <div className="p-5">
          {!showResult && (
            <QuizB7
              question={quizList[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswer}
            />
          )}
          {showResult && (
            <div>
              <Results questions={quizList} answers={answers} />
            </div>
          )}
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult && (
            <div>
              {`${currentQuestion + 1} de ${quizList.length} pergunta${quizList.length === 1 ? '' : 's'}`}
            </div>
          )}
          {showResult && (
            
            <div>            
              <button
                className="bg-blue-500 py-2 px-4 text-white rounded-md"
                onClick={resetQuiz}
              >
                Reiniciar Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
