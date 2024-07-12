type Props = {
    nota: number;

}

export const Nota = ({nota}:Props) => {
    if(nota>5){
        nota = 5;
    }
    if(nota < 1){
        nota = 1;
    }
    
    let emojis = ['','😧','😟','😐','🙂','😃'];
    const notaInt = Math.floor(nota);

    let emoji = '';

    emoji = emojis[notaInt].repeat(notaInt) + '😶'.repeat(5 - notaInt);

   

    return (

        <div className="flex gap-4 text-4xl">
            <div className="px-4 py-1 bg-slate-800 text-white ">{nota.toFixed(1)}</div>
            <div>{emoji}</div>
       
        </div>
   
  

    );
}