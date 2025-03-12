import React, { useState, useEffect } from "react";
import PhnMemberList from "./components/PhnMemberList";
import PhnMemberAdd from "./components/PhnMemberAdd";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PhnApp() {
  const [members, setMembers] = useState([]);

  // Lấy danh sách từ localStorage khi trang load
  useEffect(() => {
    const storedMembers = JSON.parse(localStorage.getItem("members")) || [];
    setMembers(storedMembers);
  }, []);

  // Hàm thêm thành viên
  const addMember = (newMember) => {
    const updatedMembers = [...members, newMember];
    setMembers(updatedMembers);
    localStorage.setItem("members", JSON.stringify(updatedMembers));
  };

  // Hàm xóa thành viên
  const deleteMember = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
    localStorage.setItem("members", JSON.stringify(updatedMembers));
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary">Danh sách thành viên</h1>
      <PhnMemberAdd onMemberAdded={addMember} />
      <PhnMemberList members={members} onDelete={deleteMember} />
    </div>
  );
}
