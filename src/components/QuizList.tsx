import { Quiz } from "@/types/Quiz";
import { useState } from "react";

type Props = {
  list: Quiz[];
}


export const QuizList = ({ list }: Props) => {

  const [response, setResponse] = useState(false);

  const handleClick = (index: number) => {
    let res = list.map((e) => (e.response == index));
    console.log(res);





  }

  return (

    <div className="p-4 bg-slate-200 rounded-sm ">
      {
        list.map((e, i) => (

          <div
            key={e.id}
            className=""
          >
            <h1 className="text-black text-3xl font-bold py-4">{e.question}</h1>

            <ul className="flex flex-col">
              {
                e.list.map((item, index) => (

                  <li className="text-black p-2 bg-blue-200 my-2 rounded-md cursor-pointer hover:opacity-60 border border-blue-400"
                    key={index}
                    onClick={() => handleClick(index)}
                  >{item}</li>

                ))

              }
            </ul>

            <p className="text-black text-center">{i + 1} de {list.length} perguntas</p>

          </div>
        ))
      }

    </div>


  );
}