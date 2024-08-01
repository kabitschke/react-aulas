"use client"

import { useState } from "react";

const Page = () => {

  type Person = {
    name: string;
    lastName: string;
  }

  const [fullName, setFullName] = useState<Person>({name: 'Maycon', lastName: 'Wilson'});

  const handleClean = () => {
    setFullName({...fullName, name: '', lastName: ''})

  }



  return (
    <div className="container mx-auto text-white flex justify-center items-center flex-col mt-4">

      <input 
        type="text" 
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.name}
        onChange={e => setFullName({...fullName, name: e.target.value})}   
      />

      <input 
        type="text" 
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        onChange={e => setFullName({...fullName, lastName: e.target.value})}   
      />
      
     <p>Meu nome completo é:</p>
     <p>{fullName.name} {fullName.lastName}</p>
     <button
     onClick={handleClean}
     className="bg-green-400 p-3 rounded-md text-white"
     >Limpar Tudo</button>
    </div>
  );

}

export default Page;