"use client"

import { useState } from "react";

const Page = () => {

 const [mostrar, setMostrar] = useState(false);
  const handleCount = () => {
    setMostrar(!mostrar);
    
  }

  return (
    <div className="container mx-auto text-white flex justify-center items-center flex-col mt-4">
      
      <button onClick={handleCount} className="bg-blue-500 p-2 rounded-md">{mostrar ? "Ocultar" : "Mostrar Área"}</button>
        {
        mostrar &&
              <div className="bg-red-500 p-2 rounded-md text-white mt-2">Área Oculta</div>
        }
      

    </div>
  );

}

export default Page;