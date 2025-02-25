import React, { Component } from 'react';
import PhnFuncEvent1 from './components/PhnFuncEvent1';
import PhnClassEventProps from './components/PhnClassEventProps';
import PhnClassEventPostData from './components/PhnClassEventPostData';
import PhnClassEventState from './components/PhnClassEventState'; // Đảm bảo component này tồn tại

class PhnApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phnNoiDung: "chưa rõ",
    };
  }

  // Hàm xử lý sự kiện khi component con truyền dữ liệu lên
  phnHandleDataToApp = (content) => {
    alert(content);
    this.setState({ phnNoiDung: content });
  };

  render() {
    return (
      <div className='container mt-3'>
        <h1 className='text-center alert alert-info my-2'>
          K23CNT2 - Phạm Hoàng Nam - Sự kiện và Biểu mẫu
        </h1>
        <hr />
        
        {/* Component Hàm - Sự kiện */}
        <div>
          <h2>Component Hàm - Sự kiện</h2>
          <PhnFuncEvent1 />
        </div>
        <hr />

        {/* Component Lớp - Sự kiện */}
        <div>
          <h2>Component Lớp - Sự kiện</h2>
          <PhnClassEventProps phnRenderTitle="Chào mừng đến với Diamontwo" />
        </div>
        <hr />

        {/* Component Lớp - Sự kiện (State) */}
        <div>
          <h2>Component Lớp - Sự kiện; State</h2>
          <PhnClassEventState />
        </div>
        <hr />

        {/* Hiển thị nội dung nhận được từ component con */}
        <div>
          <h1>{this.state.phnNoiDung}</h1>
          <h2>Component Lớp - Sự kiện; Gửi dữ liệu lên App</h2>
          <PhnClassEventPostData onPhnDataToApp={this.phnHandleDataToApp} />
        </div>
      </div>
    );
  }
}

export default PhnApp;

