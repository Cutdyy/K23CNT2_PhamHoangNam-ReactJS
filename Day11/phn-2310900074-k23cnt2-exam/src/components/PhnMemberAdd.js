import React, { useState } from "react";

export default function PhnMemberAdd({ onMemberAdded }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !username || !password) return;

    const newMember = { id: Date.now(), name, username, password };
    onMemberAdded(newMember); // Gửi dữ liệu lên PhnApp.js để cập nhật

    setName("");
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-light rounded">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Họ và Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Tên Đăng Nhập"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="form-control mb-2"
        placeholder="Mật Khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btn btn-primary w-100">
        Thêm Thành Viên
      </button>
    </form>
  );
}
