import React from 'react'

export default function PhnListUser({renderPhnUsers}) {

    const phnElements = renderPhnUsers.map((phnItem, index) => {
        return (
            <tr key={index}> 
                <td>{index + 1}</td>
                <td>{phnItem.id}</td>
                <td>{phnItem.phnFullName}</td>
                <td>{phnItem.phnUserName}</td>
                <td>{phnItem.phnPass}</td>
            </tr>
        )
    })
  
    return (
        <div>
            <h2>Danh sách tài khoản</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>UserName</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {phnElements}
                </tbody>
            </table>
        </div>
    )
}