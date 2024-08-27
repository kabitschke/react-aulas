import { Quiz } from "@/types/Quiz";
import { useState } from "react";

type Props = {
  list: Quiz[];
}

export const QuizList = ({ list }: Props) => {
  const [response, setResponse] = useState<boolean | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
    const isCorrect = list.some((e) => e.response === index);
    setResponse(isCorrect);
  }

  return (
    <div className="p-4 bg-slate-200 rounded-sm">
      {
        list.map((e, i) => (
          <div key={e.id} className="">
            <h1 className="text-black text-3xl font-bold py-4">{e.question}</h1>

            <ul className="flex flex-col">
              {
                e.list.map((item, index) => {
                  // Define uma classe com base no índice
                  let itemClass = 'bg-blue-200 border-blue-400'; // classe padrão

           

                  // Adiciona uma classe com base na resposta clicada
                  if (clickedIndex === index) {
                    itemClass = response ? 'bg-green-400 border-green-600' : 'bg-red-400 border-red-600';
                  }

                  return (
                    <li
                      className={`text-black p-2 my-2 rounded-md cursor-pointer hover:opacity-60 border ${itemClass}`}
                      key={index}
                      onClick={() => handleClick(index)}
                    >
                      {item}
                    </li>
                  );
                })
              }
            </ul>

            <p className="text-black text-center">{i + 1} de {list.length} pergunta{list.length === 1 ? '' : 's'}</p>
          </div>
        ))
      }
    </div>
  );
}
