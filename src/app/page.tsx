import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

const Page = () => {

  return (
    <div className="container mx-auto text-white flex justify-center items-center flex-col mt-4">
      <h1 className="text-5xl mb-5 text-black ">Lista de estudantes</h1>
      <StudentTable students={students} />

    </div>
  );

}

export default Page;