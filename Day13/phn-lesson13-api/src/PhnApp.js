import React from 'react'
import PhnReadApiLocal from './components/PhnReadApiLocal'
import PhnReadMockAPI from './components/PhnReadMockAPI'
import PhnCreateMockAPI from './components/PhnCreateMockAPI'

export default function PhnApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Phạm Hoàng Nam</h1>
        <hr/>
        <PhnReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <PhnReadMockAPI />

        <PhnCreateMockAPI />
    </div>
  )
}
