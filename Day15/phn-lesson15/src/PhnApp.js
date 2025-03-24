import React from 'react'
import { BrowserRouter as PhnRouter, Route, Routes } from 'react-router-dom'
import PhnNavBar from './components/PhnNavBar'
import PhnHome from './components/PhnHome'
import PhnEditUser from './components/PhnEditUser'
import PhnCreateUser from './components/PhnCreateUser'
import PhnListUser from './components/PhnListUser'

export default function PhnApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT2 - Phạm Hoàng Nam - 2310900074</h1>
      <hr/>
      <PhnRouter>
          <PhnNavBar />
          <hr/>
          <Routes>
              <Route path='/' element={<PhnHome/>} />
              <Route path='/phn-list-user' element={<PhnListUser/>} />
              <Route path='/phn-create-user' element={<PhnCreateUser/>} />
              <Route path='/phn-edit-user/:id' element={<PhnEditUser/>} />
          </Routes>
      </PhnRouter>
    </div>
  )
}