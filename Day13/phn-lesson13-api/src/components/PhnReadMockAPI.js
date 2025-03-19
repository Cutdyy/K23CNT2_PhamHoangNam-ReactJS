import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PhnReadMockAPI() {
    // State quản lý danh sách user, loading và lỗi
    const [phnListUser, setPhnListUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // API
    const phnApiOnline = "https://67d92c5300348dd3e2a9f98f.mockapi.io/k23cnt2_phamhoangnam/phn_users";

    // Lấy danh sách người dùng từ API
    useEffect(() => {
        setLoading(true); // Bắt đầu tải dữ liệu
        axios.get(phnApiOnline)
            .then((response) => {
                console.log("Dữ liệu từ API:", response.data); // Kiểm tra dữ liệu trả về
                setPhnListUser(response.data);
                setLoading(false); // Hoàn thành tải
            })
            .catch((error) => {
                console.error("Lỗi khi đọc dữ liệu:", error);
                setError("Không thể tải dữ liệu từ API!");
                setLoading(false);
            });
    }, []);

    // Xóa người dùng
    const phnDeleteUser = async (id) => {
        console.log("Đang xóa ID:", id); // Kiểm tra ID trước khi xóa
    
        if (window.confirm("Bạn có chắc muốn xóa?")) {
            try {
                const response = await axios.delete(`${phnApiOnline}/${id}`);
                console.log("Phản hồi sau khi xóa:", response);
    
                if (response.status === 200) {
                    // Cập nhật lại danh sách user sau khi xóa thành công
                    setPhnListUser((prevUsers) => prevUsers.filter(user => user.id !== id));
                }
            } catch (error) {
                console.error("Lỗi khi xóa:", error);
                setError("Xóa không thành công, vui lòng thử lại!");
            }
        }
    };    

    // Hiển thị danh sách user
    const phnElementUser = phnListUser.map((phn_item) => (
        <tr key={phn_item.id}>
            <td>{phn_item.id}</td>
            <td>{phn_item.phnFullName}</td>
            <td>{phn_item.phnAge}</td>
            <td>{phn_item.phnActive ? "Hoạt động" : "Khóa"}</td>
            <td>
                <button className="btn btn-warning mx-1">Sửa</button>
                <button className="btn btn-danger" onClick={() => phnDeleteUser(phn_item.id)}>Xóa</button>
            </td>
        </tr>
    ));

    return (
        <div className="alert alert-danger">
            <h2>Danh sách người dùng</h2>
            {loading ? (
                <p>Đang tải dữ liệu...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : phnListUser.length === 0 ? (
                <p>Không có dữ liệu người dùng.</p>
            ) : (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Full Name</th>
                            <th>Age</th>
                            <th>Active</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{phnElementUser}</tbody>
                </table>
            )}
        </div>
    );
}
