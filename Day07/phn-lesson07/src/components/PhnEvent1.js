import React, { useState } from 'react';

const PhnEvent1 = () => {
    const [phnProducts] = useState([
        { phnId: "P001", phnName: "IPhone11", phnQuantity: 15, phnPrice: 1000 },
        { phnId: "P002", phnName: "IPhone12", phnQuantity: 20, phnPrice: 1250 },
        { phnId: "P003", phnName: "IPhone13", phnQuantity: 10, phnPrice: 1500 },
        { phnId: "P004", phnName: "IPhone14", phnQuantity: 15, phnPrice: 2000 },
    ]);

    return (
        <div className='alert alert-success'>
            <h2>Danh sách sản phẩm</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>phnId</th>
                        <th>phnName</th>
                        <th>phnQuantity</th>
                        <th>phnPrice</th>
                    </tr>
                </thead>
                <tbody>
                    {phnProducts.map((phnItem, index) => (
                        <tr key={phnItem.phnId}>
                            <td>{index + 1}</td>
                            <td>{phnItem.phnId}</td>
                            <td>{phnItem.phnName}</td>
                            <td>{phnItem.phnQuantity}</td>
                            <td>${phnItem.phnPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PhnEvent1;
