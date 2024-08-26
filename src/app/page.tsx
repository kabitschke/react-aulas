"use client"

import { QuizList } from "@/components/QuizList";
import { quizList } from "@/data/quizList";

const page = () => {
  return (
    <div className="w-screen h-screen bg-blue-500 flex justify-center items-center">

      <QuizList list={quizList} />

    </div>

  );
}

export default page;