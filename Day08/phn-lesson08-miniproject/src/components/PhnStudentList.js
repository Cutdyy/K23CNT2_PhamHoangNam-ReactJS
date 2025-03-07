import React, { Component } from "react";
import PhnStudent from "./PhnStudent";

class PhnStudentList extends Component {
  // Hàm xử lý sự kiện xem
  phnHandleView = (phnStudent) => {
    if (this.props.onPhnHandleView) {
      this.props.onPhnHandleView(phnStudent);
    } else {
      console.error("❌ Lỗi: onPhnHandleView chưa được truyền từ PhnApp!");
    }
  };

  // Hàm xử lý sự kiện chỉnh sửa
  phnHandleEdit = (phnStudent) => {
    if (this.props.onPhnHandleEdit) {
      this.props.onPhnHandleEdit(phnStudent);
    } else {
      console.error("❌ Lỗi: onPhnHandleEdit chưa được truyền từ PhnApp!");
    }
  };

  // Hàm xử lý sự kiện xóa
  phnHandleDelete = (phnId) => {
    if (this.props.onPhnHandleDelete) {
      this.props.onPhnHandleDelete(phnId);
    } else {
      console.error("❌ Lỗi: onPhnHandleDelete chưa được truyền từ PhnApp!");
    }
  };

  render() {
    let { renderPhnStudents } = this.props;

    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {renderPhnStudents.map((phnItem, index) => (
                <PhnStudent
                  key={phnItem.phnId} // Dùng phnId thay vì index để tránh lỗi key
                  index={index}
                  renderPhnStudent={phnItem}
                  onPhnHandleView={() => this.phnHandleView(phnItem)}
                  onPhnHandleEdit={() => this.phnHandleEdit(phnItem)}
                  onPhnHandleDelete={() => this.phnHandleDelete(phnItem.phnId)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PhnStudentList;
