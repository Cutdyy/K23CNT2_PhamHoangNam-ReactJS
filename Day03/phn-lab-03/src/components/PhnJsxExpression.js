import React from 'react'

export default function PhnJsxExpression() {
    // biến
    const name = 'Pham Hoang Nam';
    // biến đối tượng
    const user = {
        firstName: 'Pham Hoang',
        lastName: 'Nam',
    };
    // hàm
    const fullName = (user) => {
        return user.firstName + " " + user.lastName ;
    }
    // element
    const element =(
        <div>
            {/* Biểu thức jsx */}
           <h2>{fullName(user)}</h2>
            <hr/>
            <h3> Wellcome to, {name}</h3>
        </div>
    );
    //Ham
    const sayWellcome = (name) => {
        if(name){
            return "Wellcome to, " + name;
        }else{
            return "Wellcome to Fit-NTU - K23CNT2"; 
        }
    }
    return (
        <div>
            <h1> Phn - JSX PhnJsxExpression</h1>
            {/*su dung bien element*/}
            {element}
            <hr/>
            {sayWellcome()}
            <hr/>
            {sayWellcome('Pham Hoang Nam')}
        </div>
    )
}
