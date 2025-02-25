import React from 'react'

export default function PhnFuncComp1(props) {
  return (
    <div>
        <h2>Props is Object</h2>
        <p><b>info</b></p>
        <p>Full Name: {props.renderInfo.fullName}</p>
        <p>Age: {props.renderInfo.age}</p>
        <p>Phone: {props.renderInfo.phone}</p>
    </div>
  )
}
