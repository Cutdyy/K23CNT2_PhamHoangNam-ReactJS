// src/HvtCompInfor.js
import React from "react";

const HvtCompInfor = ({ info }) => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Thông tin cá nhân</h2>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Họ và Tên:</span>
          <span className="font-medium text-gray-800">{info.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Mã Sinh Viên:</span>
          <span className="font-medium text-gray-800">{info.studentId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Ngày Sinh:</span>
          <span className="font-medium text-gray-800">{info.birthDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Số Điện Thoại:</span>
          <span className="font-medium text-gray-800">{info.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Lớp:</span>
          <span className="font-medium text-gray-800">{info.class}</span>
        </div>
      </div>
    </div>
  );
};

export default HvtCompInfor;
// src/App.js