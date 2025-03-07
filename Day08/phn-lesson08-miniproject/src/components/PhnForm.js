import React, { Component } from "react";

class PhnForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      phnId: "",
      phnStudentName: "",
      phnAge: "",
      phnGender: "",
      phnBirthday: "",
      phnBirthPlace: "",
      phnAddress: "",
    };
    this.state = { ...this.defaultState };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.renderPhnStudent !== this.props.renderPhnStudent) {
      this.setState(this.props.renderPhnStudent || this.defaultState);
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onPhnHandleAddOrUpdate } = this.props;
    if (onPhnHandleAddOrUpdate) {
      onPhnHandleAddOrUpdate({
        ...this.state,
        phnBirthday: this.state.phnBirthday.trim() || "Chưa cập nhật",
      });
    } else {
      console.error("Lỗi: onPhnHandleAddOrUpdate không được truyền vào!");
    }
    this.setState({ ...this.defaultState });
  };

  render() {
    const fields = [
      { name: "phnId", label: "ID", type: "text", required: true },
      { name: "phnStudentName", label: "Tên", type: "text", required: true },
      { name: "phnAge", label: "Tuổi", type: "number", required: true },
      { name: "phnBirthday", label: "Ngày sinh", type: "text", required: true },
      { name: "phnBirthPlace", label: "Nơi sinh", type: "text", required: true },
      { name: "phnAddress", label: "Địa chỉ", type: "text", required: true },
    ];

    return (
      <div className="card p-3">
        <h4 className="text-center">{this.state.phnId ? "Chỉnh sửa sinh viên" : "Thêm sinh viên"}</h4>
        <form onSubmit={this.handleSubmit}>
          {fields.map(({ name, label, type, required }) => (
            <div key={name} className="form-group">
              <label>{label}:</label>
              <input type={type} name={name} className="form-control" value={this.state[name]} onChange={this.handleChange} required={required} />
            </div>
          ))}
          <div className="form-group">
            <label>Giới tính:</label>
            <select name="phnGender" className="form-control" value={this.state.phnGender} onChange={this.handleChange} required>
              <option value="">Chọn giới tính</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            {this.state.phnId ? "Cập nhật" : "Thêm mới"}
          </button>
        </form>
      </div>
    );
  }
}

export default PhnForm;