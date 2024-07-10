const getWeekday = (today:Date) => {
    return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(today);
}

type Mk = {
    name: string;
    avatar?: string;
    roles: string[];
}

export const Person = ({name,
    avatar = 'https://media.istockphoto.com/id/1337144146/pt/vetorial/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=_XeYoSJQIN7GrE08cUQDJCo3U7yvoEp5OKpbhQzpmC0=',
    roles}:Mk) => {


     const today: Date = new Date();
     
 
    return(
   <>
        <h1>{name} - {getWeekday(today)}</h1>
        <img src={avatar} 
        alt={name} 
        style={{display:"block", width:"200px", height:"auto"}}
        />

        <ul>
            <li>{roles[0]}</li>
            <li>{roles[1]}</li>
            
        </ul>
   </>
    );
}