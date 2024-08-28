import { Quiz } from "@/types/Quiz";

type Props = {
  questions: Quiz[];
  answers: number[];
}

export const Results = ({ questions, answers }: Props) => {
  return (
    <div className="text-black">
      {
        questions.map((e, index) => (

          <div className="bg-gray-100 mb-2 p-2 rounded-md" key={index}>
            <div className="font-bold">{e.question}</div>


            {/* <ul>
              {e.list.map((option, i) => (
                <li key={i} style={{ fontWeight: i === e.response ? 'bold' : 'normal' }}>
                  {option}{i === e.response ? "(Correta)" : ""}
                </li>
              ))}
            </ul> */}

            <div>Sua Resposta: {e.list[answers[index]]}</div>
            {/*O index do map vai acessar cada posição das respostas na ordem dentro de list que tem as opções*/}

            <div className="">Resposta: <span className="text-green-500">{e.list[e.response]}</span> </div>

            {answers[index] === e.response ? (
              <div className="text-green-500">Acertou!</div>
            ) : (
              <div className="text-red-500">Errou!</div>
            )}
          </div>
        ))
      }
    </div>
  );
}
