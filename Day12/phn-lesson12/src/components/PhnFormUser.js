import React, { useState } from 'react'

export default function PhnFormUser({onPhnAddNew}) {

    const [id, setPhnId] = useState('')
    const [phnFullName, setPhnFullName] = useState('')
    const [phnUserName, setPhnUserName] = useState('')
    const [phnPass, setPhnPass] = useState('')

    const phnHandleSubmit = (event) => {
        event.preventDefault();
        console.log(id, phnFullName, phnUserName, phnPass)
        
        onPhnAddNew({id, phnFullName, phnUserName, phnPass})
    }
  
    return (
        <div>
            <form>
                <p>Mã sinh viên:
                    <input type='text' name='id' value={id} onChange={(ev) => setPhnId(ev.target.value)} /> 
                </p>
                <p>Họ và tên:
                    <input type='text' name='phnFullName' value={phnFullName} onChange={(ev) => setPhnFullName(ev.target.value)} /> 
                </p>
                <p>Tài khoản:
                    <input type='text' name='phnUserName' value={phnUserName} onChange={(ev) => setPhnUserName(ev.target.value)} /> 
                </p>
                <p>Mật khẩu:
                    <input type='password' name='phnPass' value={phnPass} onChange={(ev) => setPhnPass(ev.target.value)} /> 
                </p>
                <p>
                    <button name='phnSave' onClick={phnHandleSubmit}>Save</button>
                </p>
            </form>
        </div>
    )
}