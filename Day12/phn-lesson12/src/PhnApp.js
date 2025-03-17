import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; // ❌ Xóa BrowserRouter
import PhnNavNar from './components/PhnNavNar';
import PhnHome from './components/PhnHome';
import PhnAbout from './components/PhnAbout';
import PhnContact from './components/PhnContact';
import PhnFormUser from './components/PhnFormUser';
import PhnListUser from './components/PhnListUser';

export default function PhnApp() {
  const listUsers = [
    { id: "SV001", phnFullName: "Phạm Hoàng Nam", phnUserName: "HoangNam", phnPass: "123456a@" },
    { id: "SV002", phnFullName: "Trịnh Quan Quang", phnUserName: "QuangHoa", phnPass: "123456a@" },
    { id: "SV003", phnFullName: "Nguyễn Quang A", phnUserName: "CuteeeCuteee", phnPass: "123456a@" },
  ];

  const [phnUsers, setPhnUsers] = useState(listUsers);

  const phnHandleAdd = (phnParam) => {
    setPhnUsers(prev => [...prev, phnParam]);
  };

  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo - [Phạm Hoàng Nam - K23CNT2]</h1>
      <hr />
      <PhnNavNar />
      <Routes>
        <Route path='/' element={<PhnHome />} />
        <Route path='/about' element={<PhnAbout />} />
        <Route path='/contact' element={<PhnContact />} />
        <Route path='/list-user' element={<PhnListUser renderPhnUsers={phnUsers} />} />
        <Route path='/create-user' element={<PhnFormUser onPhnAddNew={phnHandleAdd} />} />
      </Routes>
    </div>
  );
}
