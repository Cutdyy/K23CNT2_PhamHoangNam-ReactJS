import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function PhnListUser() {
    // state
    const [phnListUser, setPhnListUser] = useState([])
    const phnApi = "https://67d92c5300348dd3e2a9f98f.mockapi.io/k23cnt2_phamhoangnam/phn_users"

    useEffect(()=>{
        axios.get(phnApi)
        .then(phn_response => {
            // Xử lý dữ liệu trả về từ API
            console.log(phn_response.data); // Dữ liệu từ API
            setPhnListUser(phn_response.data)
        })
        .catch(error => {
            // Xử lý lỗi
            console.error('Có lỗi xảy ra:', error);
        });
    },[])
   
    

    const phnHandleDelete = async (phnId)=>{
        if(window.confirm('Bạn có muốn xóa không?')){
            await axios.delete(phnApi+"/"+phnId);

            let phnListUserDelete = phnListUser.filter(x=>x.id !=phnId);
            setPhnListUser(phnListUserDelete);
        }
    }
    const navigate = useNavigate();
    const phnHandleUpdate = (phnId) =>{
        navigate(`/phn-edit-user/${phnId}`);
    }
  return (
    <div>
        <h2>Danh sách user</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* // hiển thị danh sách user */}
                {
                    phnListUser.map((phnUserItem,index)=>{
                        return (
                            <tr>
                                <td>{phnUserItem.id}</td>
                                <td>{phnUserItem.phn_name}</td>
                                <td>{phnUserItem.phn_email}</td>
                                <td>{phnUserItem.phn_phone}</td>
                                <td>
                                    {phnUserItem.phn_active?
                                    <span className='badge text-bg-success'>Hoạt động</span>
                                    :<span className='badge text-bg-danger'>Tạm khóa</span>}
                                </td>
                                <td>
                                    <button onClick={()=>phnHandleUpdate(phnUserItem.id)}>Edit</button>
                                    <button onClick={(ev)=> phnHandleDelete(phnUserItem.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}