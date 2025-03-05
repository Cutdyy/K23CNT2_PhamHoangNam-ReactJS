import React from 'react';

export default function PhnRenderList() {
    const phnList = ["Phạm Hoàng Nam", "ReactJS", "Fit-NTU"];

    const phnElement = phnList.map((item, index) => {
        return <li key={index}>{item}</li>;
    });

    return (
        <div className='alert alert-success'>
            <h2>Danh sách:</h2>
            <ul>
                {phnList.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <hr />
            <ul>{phnElement}</ul>
        </div>
    );
}
