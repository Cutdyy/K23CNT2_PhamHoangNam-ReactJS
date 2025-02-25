import React from 'react'

export default function PhnFuncEvent1() {
    // Hàm xử lý sự kiện
    const PhnFuncEvent1Click = () => {
        alert('Button 1 - clicked');
    };
    const PhnFuncEvent2Click = () => {
        alert('Button 2 - clicked');
    };
    const PhnFuncEvent3Click = (name) => {
        alert("Name: " + name);
    };

    return (
        <div className="alert alert-info">
            <button className="btn btn-primary" onClick={PhnFuncEvent1Click}>
                Button 1
            </button>
            <button className='btn btn-success' onClick={PhnFuncEvent2Click}>
                Button 2
            </button>
            <button className='btn btn-warning' onClick={() => PhnFuncEvent3Click("Pham Hoang Nam")}>
                Button 3
            </button>
        </div>
    );
}
