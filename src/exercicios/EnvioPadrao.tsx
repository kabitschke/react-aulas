"use client"
import { FormEvent } from "react";


const Page = () => {
  const handleFormSubmit = (e:FormEvent<HTMLElement>) => {
    e.preventDefault();
    alert("Opa enviando ...");

  }

  return (
    <div className="w-screen h-screen text-black flex justify-center items-center flex-col mt-4">
     
      <form onSubmit={handleFormSubmit}>

        <input type="text" />
        <input className=" bg-blue-500" type="submit" value="Enviar" />
      </form>
     

    </div>
  );

}

export default Page;