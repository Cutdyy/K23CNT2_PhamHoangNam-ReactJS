import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function PhnEditUser() {
     const phnUser = {
            id:0,
            'phn_name':'',
            'phn_email':'',
            'phn_phone':'',
            'phn_active':true
        }
    
        const [phn_user, setPhn_User] = useState(phnUser);
        const phnApi = "https://67d92c5300348dd3e2a9f98f.mockapi.io/k23cnt2_phamhoangnam/phn_users"

        const {id} = useParams();

        useEffect(()=>{
            axios.get(`${phnApi}/${id}`)
            .then(phn_response => {
                // Xử lý dữ liệu trả về từ API
                console.log(phn_response.data); // Dữ liệu từ API
                setPhn_User(phn_response.data)
            })
            .catch(error => {
                // Xử lý lỗi
                console.error('Có lỗi xảy ra:', error);
            });
        },[])
        const navigate = useNavigate();
        const phnHandleSubmit = (ev)=>{
            ev.preventDefault();
            console.log(phn_user);
            axios
            .put(`${phnApi}/${id}`, phn_user)
            .then((phn_response) => {
                alert('Cập nhật thành công!');
                navigate('/phn-list-user'); // Sau khi lưu, chuyển về trang danh sách
            })
        }
  return (
    <div>
      <h2>Sửa thông tin user</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="phn_name" className="col-sm-2 col-form-label">FullName</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="phn_name"
                name="phn_name"
                value={phn_user.phn_name} 
                onChange={(ev)=>setPhn_User({...phn_user,phn_name:ev.target.value})} 
                />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="phn_email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="phn_email" 
             name="phn_email"
             value={phn_user.phn_email} 
             onChange={(ev)=>setPhn_User({...phn_user,phn_email:ev.target.value})} 

             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="phn_phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="phn_phone" 
             name="phn_phone"
             value={phn_user.phn_phone} 
             onChange={(ev)=>setPhn_User({...phn_user,phn_phone:ev.target.value})} 
             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="phn_active" className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input type="radio" id="phn_active_true"  className="mx-3"   
                onChange={(ev)=>setPhn_User({...phn_user,phn_active:ev.target.value})}
                value={true}
                name="phn_active"  /> 
            <label htmlFor="phn_active_true">Hoạt động</label>
            <input type="radio" id="phn_active_false"  className="mx-3"
                onChange={(ev)=>setPhn_User({...phn_user,phn_active:ev.target.value})}
                value={false} 
                name="phn_active" /> 
            <label htmlFor="phn_active_false">Tạm khóa</label>
          </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-primary mx-2 px-3" name="btnPhnCreate" 
                    onClick={phnHandleSubmit}
                    >Update</button>
                <button className="btn btn-secondary mx-2 px-3" name="btnPhnBack">Back</button>
            </div>
        </div>
      </form>
    </div>
  )
}
