"use client"

import { useState } from "react";

const Page = () => {

 const [count, setCount] = useState(false);
  const handleCount = () => {
    setCount(!count);
    
  }

  return (
    <div className="container mx-auto text-white flex justify-center items-center flex-col mt-4">
      
      <button onClick={handleCount} className="bg-blue-500 p-2 rounded-md">{count ? "Ocultar" : "Mostrar Área"}</button>
        {
          count &&
              <div className="bg-red-500 p-2 rounded-md text-white mt-2">Área Oculta</div>
        }
      

    </div>
  );

}

export default Page;