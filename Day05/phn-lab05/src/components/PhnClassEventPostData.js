import React, { Component } from 'react';

class PhnClassEventPostData extends Component {
  phnHandleClick = () => {
    if (this.props.onPhnDataToApp) {
      this.props.onPhnDataToApp("Dữ liệu từ component con - PhnClassEventPostData");
    }
  };

  render() {
    return (
      <div className='alert alert-success'>
        <button className="btn btn-primary" onClick={this.phnHandleClick}>
          Button 1 - Chuyển dữ liệu lên App
        </button>
      </div>
    );
  }
}

export default PhnClassEventPostData;