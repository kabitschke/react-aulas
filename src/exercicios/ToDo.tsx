"use client"

import { useState } from "react";

const Page = () => {

  type Todo = {
    label: string;
    checked: boolean;
  }

  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState<Todo[]>([]);


const handleAddButton = () => {
  if(itemInput.trim() === '')return;
  setList([...list, {label: itemInput, checked:false}]);
  setItemInput('');  
}

const deleteItem = (e:number) => {
  setList(list.filter((el, key)=> key !== e));
}

const toggleItem = (index: number) => {
  const newList = list.map((item, i) => 
    i === index ? { ...item, checked: !item.checked } : item
  );
  setList(newList);
}

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">

        <input type="text"
        placeholder="O que deseja fazer"
        className="flex-1 boder border-black p-3 text-2xl text-black rounded-md mr-3" 
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}
        />

      <button className="bg-green-400 p-3 text-white rounded-md" onClick={handleAddButton}>Adicionar</button>
      </div>


    <div className="flex w-full max-w-lg my-3 bg-slate-300">
      <ul className="w-full">
        {list.map((el, i) => (
          <li key={i} className="flex justify-between items-center p-2 border-b border-slate-400">
            <input onClick={() => toggleItem(i)} type="checkbox" checked={el.checked}  className="w-6 h-6 mr-3"/>
            <span
                onClick={() => toggleItem(i)}
                className={`flex-1 cursor-pointer ${el.checked ? 'line-through' : ''}`}
              >
                {el.label}
              </span>


            <button 
            className="hover:underline p-2 bg-red-500 rounded-md text-white text-xs"
            onClick={() => deleteItem(i)}
            
            >Deletar</button>
          </li>
        ))}
      </ul>
    </div>



    </div>
  );

}

export default Page;