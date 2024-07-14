import { Student } from "@/types/Student"

type Props = {
    students: Student[];
}


export const StudentTable = ({ students }: Props) => {
      return(
            <div >
            <table className="table-fixed mt-4">
              <thead className="bg-slate-900">
                <tr className="text-left">
                  <th className="px-4 py-4">Name</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Grade1</th>
                  <th className="px-4 py-4">Grade2</th>
                  <th className="px-4 py-4">Final Grade</th>
                </tr>
              </thead>
              <tbody >
                  {students.map(student => (
                    <tr key={student.id} className="bg-slate-400 odd:bg-slate-500 hover:bg-slate-700">
                      <div className="flex items-center px-4 py-4">
                        <div ><img className="w-20 h-20 rounded-full" src={student.avatar} alt="Avatar" /></div>
                        <td className="px-4 py-4">{student.name}
                          <div className="text-gray-300">{student.email}</div>
                        </td>
                      </div>  
                                            
                        <td className="px-4 py-4">
                          <div className={`px-2 py-1 ${student.active ? 'bg-green-500' : 'bg-red-500'} text-white rounded`}>
                            {student.active ? 'Active' : 'Inative'}
                          </div>
                        </td>   
                                                           
                      <td className="px-4 py-4">{student.grade1}</td>
                      <td className="px-4 py-4">{student.grade2}</td>
                      <td className="px-4 py-4">{student.active ? ((student.grade1 + student.grade2)/2).toFixed(1) : '--'}</td>
              
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
      );

}