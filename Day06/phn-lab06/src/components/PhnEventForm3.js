import React, { Component } from 'react';

class PhnEventForm3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phnGioiTinh: 'Nam'
    };
  }

  phnHandleChange = (event) => {
    this.setState({ phnGioiTinh: event.target.value });
  };

  phnHandleSubmit = (event) => {
    event.preventDefault();
    alert('Giới tính của bạn là: ' + this.state.phnGioiTinh);
  };

  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form input - radio</h2>
        <form onSubmit={this.phnHandleSubmit}>
          <label htmlFor='phnNam'>Giới tính:</label>
          
          <input
            type='radio'
            name='phnGioiTinh'
            id='phnNam'
            className='mx-2'
            value='Nam'
            checked={this.state.phnGioiTinh === 'Nam'}
            onChange={this.phnHandleChange}
          />
          <label htmlFor='phnNam'>Nam</label>

          <input
            type='radio'
            name='phnGioiTinh'
            id='phnNu'
            className='mx-2'
            value='Nữ'
            checked={this.state.phnGioiTinh === 'Nữ'}
            onChange={this.phnHandleChange}
          />
          <label htmlFor='phnNu'>Nữ</label>

          <input
            type='radio'
            name='phnGioiTinh'
            id='phnKhac'
            className='mx-2'
            value='Khác'
            checked={this.state.phnGioiTinh === 'Khác'}
            onChange={this.phnHandleChange}
          />
          <label htmlFor='phnKhac'>Khác</label>

          {/* Nút submit */}
          <button type="submit" className='btn btn-primary mx-2'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PhnEventForm3;