import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PhnReadApiLocal() {
    // Khởi tạo state
    const [phnListUser, setPhnListUser] = useState([])

    // API Local
    const apiUrl = "http://localhost:3001/users"

    // Lấy danh sách từ apiUrl
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((phnResponse) => {
                setPhnListUser(phnResponse.data)
            })
            .catch((error) => {
                console.error("Lỗi khi lấy dữ liệu:", error);
            })
    }, [])

    return (
        <div>
            <h2>Đọc dữ liệu từ API Local</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {phnListUser.map((phnItem, index) => (
                        <tr key={index}>
                            <td>{phnItem.fullName}</td>
                            <td>{phnItem.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}