import React, { Component } from 'react'

export default class PhnClassEventProps extends Component {
    //Ham xu li su kien
    phnEventtHandleClick1 = () => {
        alert("Hello...." + this.props.phnRenderTitle);
    }
    render() {
    return (
      <div className='alert alert-danger'>
        <button className='btn btn-primary'onClick={this.phnEventtHandleClick1}>Button 1</button>
      </div>
    );
  }
}
