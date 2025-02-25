import React from 'react'

export default function PhnFuncEventprops(phnProps) {
    //ham xu ly su kien
    const phnHanldeButtonClick1 = () => {
        alert("Du lieu tu props:" + phnprops.phnRenderName);
        console.log("Xin chao:",phnprops.phnRenderName);
    }
    const phnHanldeButtonClick2 = (param) => {
        //Lay du lieu tu props
        alert("Du lieu tu props(Button 2 click):" + props.phnRenderName);
        console.log('====================================');
        console.log("Hi:",param);
        console.log('====================================');
    }
    return (
    <div className="alert alert-info">
        <button className="btn btn-primary mx-1" 
            onClick={phnHanldeButtonClick1}>Button 1</button>
        <button className="btn btn-success mx-1" 
            onClick={()=>phnHanldeButtonClick2("Button 2")}>Button 2</button>
    </div>
  )
}
