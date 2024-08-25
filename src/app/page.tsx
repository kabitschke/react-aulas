"use client"

import { GaleriaImg } from "@/components/GaleriaImg";
import { galery } from "@/data/galery";

const Page = () => {


  return (

    <div className="lg:container mx-auto">

      <GaleriaImg list={galery}/>

    </div>
  )
}

export default Page;