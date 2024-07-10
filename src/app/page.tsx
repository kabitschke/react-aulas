import { peopleList } from '@/data/peopleList';
const Page = () => {

  const chemists = peopleList.filter(person => person.profession === 'chemist');

  const zero = (number: number) => {
    return number < 10 ? `0${number}` : number;
  }


  let horario = new Date();
  let horas = zero(horario.getHours());
  let minutos = zero(horario.getMinutes());

  let saudacao = '';


  if (horario.getHours() < 12) {
    saudacao = 'Bom dia! 🌞';
  } else if (horario.getHours() > 11 && horario.getHours() < 18) {
    saudacao = 'Boa Tarde! ☀️';
  } else {
    saudacao = 'Boa Noite! 💤';
  }

  let fullHoras = `${horas} : ${minutos}`


  return (
    <div className='area'>

      <div className='area-horas'>

        {fullHoras}

        <p className='saudacao'>{saudacao}</p>

      </div>

    </div>
  );



}

export default Page;