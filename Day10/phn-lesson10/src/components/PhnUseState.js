import React, { useState } from 'react'

export default function PhnUseState() {
    // Khởi tạo danh sách sinh viên
    const phnStudents = [
        { phnId: "SV001", phnName: "Hoàng Nam", phnAge: 20 },
        { phnId: "SV002", phnName: "Nguyễn Quang A", phnAge: 40 },
    ];
    const [phnStudentList, setPhnStudentList] = useState(phnStudents);

    // Hàm thêm sinh viên
    const phnHandleAddNewStudent = () => {
        let phnStudent = {
            phnId: "SV003",
            phnName: "Nguyễn Quang B",
            phnAge: 22
        };
        setPhnStudentList([...phnStudentList, phnStudent]);
    };

    // Hàm xóa sinh viên
    const phnHandleDeleteStudent = (id) => {
        const updatedList = phnStudentList.filter(student => student.phnId !== id);
        setPhnStudentList(updatedList);
    };

    return (
        <div className='alert alert-danger'>
            <h2>useState Demo</h2>
            <div>
                <h3>Danh sách sinh viên</h3>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {phnStudentList.map((phnStudent, index) => (
                            <tr key={index}>
                                <td>{phnStudent.phnId}</td>
                                <td>{phnStudent.phnName}</td>
                                <td>{phnStudent.phnAge}</td>
                                <td>
                                    <button onClick={() => phnHandleDeleteStudent(phnStudent.phnId)} className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">
                                <button onClick={phnHandleAddNewStudent} className="btn btn-primary">Thêm mới sinh viên</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}