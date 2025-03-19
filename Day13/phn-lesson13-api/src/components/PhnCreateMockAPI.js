import React, { useState } from 'react'
import axios from 'axios'

export default function PhnCreateMockAPI() {
    // Khởi tạo state
    const [phnFullName, setPhnFullName] = useState('')
    const [phnAge, setPhnAge] = useState(0)
    const [phnActive, setPhnActive] = useState(true)

    // API MockAPI
    const phnCreateUserApi = "https://67d92c5300348dd3e2a9f98f.mockapi.io/k23cnt2_phamhoangnam/phn_users";

    // Khi submit form
    const phnHandleSubmit = async (event) => {
        event.preventDefault();
        console.log("Dữ liệu gửi API:", { phnFullName, phnAge, phnActive });

        let phnNewUser = { 
            phnFullName, 
            phnAge, 
            phnActive 
        };

        try {
            const phn_response = await axios.post(phnCreateUserApi, phnNewUser);
            console.log("User created:", phn_response.data);
            alert("Thêm user thành công!");
        } catch (error) {
            console.error("Lỗi khi thêm user:", error);
            alert("Thêm user thất bại!");
        }
    }

    return (
        <div className='alert alert-info'>
            <h2>Thêm mới users</h2>
            <hr/>
            <form onSubmit={phnHandleSubmit}>
                <div className='mb-1'>
                    <label htmlFor="phnFullName">Full Name</label>
                    <input type='text' name='phnFullName' id="phnFullName" 
                        value={phnFullName}
                        onChange={(ev) => setPhnFullName(ev.target.value)} 
                        required
                    />
                </div>
                <div className='mb-1'>
                    <label htmlFor="phnAge">Age</label>
                    <input type='number' name='phnAge' id="phnAge" 
                        value={phnAge}
                        onChange={(ev) => setPhnAge(Number(ev.target.value))} 
                        required
                    />
                </div>
                <div className='mb-1'>
                    <label>Active</label>
                    <input type='radio' name='phnActive' id="phnActive_hd" value="true" 
                        checked={phnActive === true}
                        onChange={(ev) => setPhnActive(ev.target.value === "true")} 
                    />
                    <label htmlFor="phnActive_hd"> Hoạt động</label>

                    <input type='radio' name='phnActive' id="phnActive_kh" value="false" 
                        checked={phnActive === false}
                        onChange={(ev) => setPhnActive(ev.target.value === "false")} 
                    />
                    <label htmlFor="phnActive_kh"> Khóa</label>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}