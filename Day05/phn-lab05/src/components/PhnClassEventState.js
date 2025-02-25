import React, { Component } from 'react';

class PhnClassEventState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phnFullName: "Pham Hoang Nam",
      phnAge: 20
    };
  }

  // Hàm xử lý sự kiện
  phnEventHandleClick1 = () => {
    // Lấy dữ liệu trong state
    alert("FullName: " + this.state.phnFullName + " - Age: " + this.state.phnAge);
  };

  render() {
    return (
      <div className='alert alert-danger p-3'>
        <button className='btn btn-primary' onClick={this.phnEventHandleClick1}>
          Button 1 - Dữ liệu trong state
        </button>
      </div>
    );
  }
}

export default PhnClassEventState;