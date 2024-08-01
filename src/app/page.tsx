"use client"

import { useState } from "react";

const Page = () => {

  type Todo = {
    label: string;
    checked: boolean;
  }

  const [list, setList] = useState<Todo[]>([{label: 'Fazer dever de casa', checked: false}, {label: 'Fazer dever de casa', checked: true}]);





  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">

        <input type="text"
        placeholder="O que deseja fazer"
        className="flex-1 boder border-black p-3 text-2xl text-black rounded-md mr-3" 
        />

      <button>Adicionar</button>
      </div>

      <ul>
        {list.map(el => (
        <li>{el.label}  - <button className="hover:underline">[ deletar ]</button></li>
        
      ))}
      
      </ul>


    </div>
  );

}

export default Page;