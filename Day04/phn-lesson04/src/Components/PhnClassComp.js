import React, { Component } from 'react';

class PhnClassComp extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      name: 'Hoang Nam',
      age: 20,
      phone: '0123456789'
    };
  }

  // Hàm xử lý sự kiện
  changeInfo = (ev) => {
    // Cập nhật state
    this.setState({
      fullName: 'Pham Hoang Nam'
    });
  }

  render() {
    const { renderName, renderUsers } = this.props;
    return (
      <div className='alert alert-success'>
        <h2>Trình bày dữ liệu từ Props</h2>
        <p>Name: {renderName}</p>
        <p>Full Name: {renderUsers ? renderUsers.fullName : 'No data'}</p>
        <p>Age: {renderUsers ? renderUsers.age : 'No data'}</p>
        <p>Phone: {renderUsers ? renderUsers.phone : 'No data'}</p>
      </div>
    );
  }
}

export default PhnClassComp;
