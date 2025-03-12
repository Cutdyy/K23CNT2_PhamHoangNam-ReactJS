import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaTrash } from "react-icons/fa";

export default function PhnMemberList({ members, onDelete }) {
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePasswordVisibility = (id) => {
    setVisiblePasswords((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <table className="table table-striped mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Họ và Tên</th>
          <th>Tên Đăng Nhập</th>
          <th>Mật Khẩu</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={member.id}>
            <td>{member.id}</td>
            <td style={index === 0 ? { fontWeight: "nomal" } : {}}>
              {member.name}
            </td>
            <td>{member.username}</td>
            <td>
              {visiblePasswords[member.id] ? member.password : "••••••••"}
              <button
                onClick={() => togglePasswordVisibility(member.id)}
                className="btn btn-sm btn-light ms-2"
              >
                {visiblePasswords[member.id] ? <FaEyeSlash /> : <FaEye />}
              </button>
            </td>
            <td>
              <button
                onClick={() => onDelete(member.id)}
                className="btn btn-danger btn-sm"
              >
                <FaTrash /> Xóa
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}