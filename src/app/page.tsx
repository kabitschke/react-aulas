import { students } from "@/data/students";


const Page = () => {




  return (
    <div className="w-screen h-screen flex justify-center  bg-black text-white">
      <div>
          <table className="table-fixed mt-4">
            <thead className="bg-slate-900">
              <tr className="text-left">
                <th>Name</th>
                <th>Status</th>
                <th>Grade1</th>
                <th>Grade2</th>
                <th>Final Grade</th>
              

              </tr>
            </thead>
            <tbody >
                {students.map(student => (
                  <tr key={student.id} className="bg-slate-400">
                    <td>{student.name}
                      <div>{student.email}</div>
                    </td>

                    <td>{student.active ? 'Active' : 'Inative'}</td>
                    <td>{student.grade1}</td>
                    <td>{student.grade2}</td>
                    <td>{student.active ? (student.grade1 + student.grade1)/2 : '--'}</td>
            
                  </tr>
                ))}
            </tbody>
          </table>
      </div>

    </div>
  );



}

export default Page;