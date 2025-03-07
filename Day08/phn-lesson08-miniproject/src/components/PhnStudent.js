import React, { Component } from "react";

class PhnStudent extends Component {
  render() {
    const { renderPhnStudent, index, onPhnHandleView, onPhnHandleEdit, onPhnHandleDelete } = this.props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{renderPhnStudent.phnId}</td>
        <td>{renderPhnStudent.phnStudentName}</td>
        <td>{renderPhnStudent.phnAge}</td>
        <td>{renderPhnStudent.phnBirthday}</td>
        <td>{renderPhnStudent.phnGender}</td>
        <td>
          {/* Nút Xem */}
          <button className="btn btn-info mx-1" onClick={() => onPhnHandleView()}>
            Xem
          </button>

          {/* Nút Chỉnh Sửa */}
          <button className="btn btn-warning mx-1" onClick={() => onPhnHandleEdit()}>
            Sửa
          </button>

          {/* Nút Xóa */}
          <button className="btn btn-danger mx-1" onClick={() => onPhnHandleDelete()}>
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default PhnStudent;
