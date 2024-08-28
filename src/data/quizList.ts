import { Quiz } from "@/types/Quiz";

export const quizList: Quiz[] = [
  {
    id: 1,
    question: "Qual ingrediente não pode faltar?",
    list: ["Farinha", "Corante", "Água", "Açúcar"],
    response: 1
  },
  {
    id: 2,
    question: "Qual função para Array retorna um Bollean?",
    list: ["Fill", "Map", "Some", "Lenght"],
    response: 2
  },
  {
    id: 3,
    question: "Qual loop utilizar?",
    list: ["Foreach", "For", "While", "For of"],
    response: 1
  },
  {
    id: 4,
    question: "Qual função para controlar tempo que uma ação será executada?",
    list: ["SetTimeout", "SetInterval", "BreakInterval", "LowTime"],
    response: 0
  },

]