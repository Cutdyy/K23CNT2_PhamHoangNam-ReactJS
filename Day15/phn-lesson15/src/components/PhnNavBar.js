import React from 'react'
import {Link} from 'react-router-dom'
import PhnHome from './PhnHome'

export default function PhnNavBar() {
  return (
    <nav>
        <Link to='/' >Home</Link> |
        <Link to='/phn-list-user' >List User</Link> |
        <Link to='/phn-create-user' >Create User</Link>
    </nav>
  )
}
