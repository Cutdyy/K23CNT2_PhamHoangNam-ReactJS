import React, { Component } from 'react';

class PhnEventForm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phnStudentName: 'Hoang Nam'
    };
  }

  // Hàm xử lý sự kiện khi thay đổi dữ liệu trên textbox
  phnHandleChange = (event) => {
    this.setState({
      phnStudentName: event.target.value,
    });
  };

  // Khi submit form, lấy dữ liệu và hiển thị
  phnHandleSubmit = (ev) => {
    ev.preventDefault();
    if (this.state.phnStudentName.trim() === '') {
      alert('Vui lòng nhập tên!');
    } else {
      alert('Xin chào: ' + this.state.phnStudentName);
    }
  };

  render() {
    return (
      <div className="alert alert-info">
        <h2>Form Input</h2>
        <form onSubmit={this.phnHandleSubmit}>
          <div className="mb-3">
            <label htmlFor="phnStudentName" className="form-label">Nhập tên:</label>
            <input
              type="text"
              name="phnStudentName"
              id="phnStudentName"
              className="form-control"
              value={this.state.phnStudentName}
              onChange={this.phnHandleChange}
            />
          </div>
          <button className="btn btn-primary">Click here</button>
        </form>
      </div>
    );
  }
}

export default PhnEventForm1;
