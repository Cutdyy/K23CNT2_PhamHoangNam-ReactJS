import React, { useState } from 'react'

export default function PhnUseStateListObject() {
    // mockdata
    const listStudent = [
        {phnId:"SV001",phnName:"Trịnh Văn Chung", phnAge:45, phnClass:"K23CNT1"},
        {phnId:"SV002",phnName:"Nguyễn Quang A", phnAge:22, phnClass:"K23CNT1"},
        {phnId:"SV003",phnName:"Nguyễn Quang B", phnAge:21, phnClass:"K23CNT1"},
        {phnId:"SV004",phnName:"Nguyễn Quang C", phnAge:23, phnClass:"K23CNT1"},
    ];
    // tạo state với hook
    const [phnStudents, setPhnStudents] = useState(listStudent);
    
    // Hàm xử lý xóa sinh viên
    const handleDelete = (phnId) => {
        setPhnStudents(phnStudents.filter(student => student.phnId !== phnId));
    };
    
    // render data
    let phnElement = phnStudents.map((phnItem, index)=>{
        return(
            <tr key={phnItem.phnId}>
                <td>{index+1}</td>
                <td>{phnItem.phnId}</td>
                <td>{phnItem.phnName}</td>
                <td>{phnItem.phnAge}</td>
                <td>{phnItem.phnClass}</td>
                <td>
                    <button>Sửa</button>
                    <button onClick={() => handleDelete(phnItem.phnId)}>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách sinh viên</h2>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>phnID</th>
                    <th>phnName</th>
                    <th>phnAge</th>
                    <th>phnClass</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {phnElement}
            </tbody>
        </table>
    </div>
  )
}