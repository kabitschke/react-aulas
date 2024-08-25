import { Galery } from "@/types/Galery"
import { useState } from "react";

type Props = {
    list: Galery[];
}
export const GaleriaImg = ({list}:Props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState<string | null>('');

    const handleClick = (name:string) => {
        setIsModalOpen(true);
        setCurrentImg(name);
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    return(
        <div>
            <h1 className="text-white text-3xl text-center my-5">Fotos Intergalacticas</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 relative px-4">
            { list.map(e => ( 

                <div key={e.id} className="">

                    <img className="cursor-pointer hover:opacity-80 object-cover w-full h-full"  src={`/img/${e.name}`} alt={e.name} onClick={() => handleClick(e.name)}/>

                </div>
                
                 ))
            }   

            {
                isModalOpen && currentImg &&
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
               
                        <img src={`/img/${currentImg}`} alt={currentImg} onClick={handleClose} className="cursor-pointer max-w-full max-h-full object-contain"/>

                    
                </div>
            }

        </div>

        </div>
    )
}