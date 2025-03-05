import React, { Component } from 'react';

class PhnRenderListStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phnStudents: [
                { phnId: "NTU001", phnName: "Phạm Hoàng Nam", phnAge: 20, phnClass: "K23CNT2" },
                { phnId: "NTU002", phnName: "Nguyễn Quang A", phnAge: 22, phnClass: "K23CNT2" },
                { phnId: "NTU003", phnName: "Nguyễn Quang B", phnAge: 21, phnClass: "K23CNT2" },
                { phnId: "NTU004", phnName: "Nguyễn Quang C", phnAge: 23, phnClass: "K23CNT2" },
            ],
        };
    }

    render() {
        let phnElement = this.state.phnStudents.map((phnItem, index) => {
            return (
                <tr key={phnItem.phnId}>
                    <td>{index + 1}</td>
                    <td>{phnItem.phnId}</td>
                    <td>{phnItem.phnName}</td>
                    <td>{phnItem.phnAge}</td>
                    <td>{phnItem.phnClass}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            );
        });

        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>phnId</th>
                            <th>phnName</th>
                            <th>phnAge</th>
                            <th>phnClass</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{phnElement}</tbody>
                </table>
            </div>
        );
    }
}

export default PhnRenderListStudent;
