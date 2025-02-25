import React, { Component } from 'react'

class PhnClassEvent1 extends Component {
    //Ham xu li su kien
    phnEventHandleClickk1 = () => {
        alert('Button 1 - clicked')
    };
    phnEventHandleClickk2 = () => {
        alert('Button 2 - clicked')
    };
  render() {
    return (
      <div className="alert alert-info">
        <button className='btn btn-primary mx-1' onClick={this.phnEventHandleClickk1}>Button 1</button>
        <button className='btn btn-success mx-1'
           onClick={()=>this.phnEventHandleClickk2("Hoang Nam")}>Button 2</button>
      </div>
    )
  }
}

export default PhnClassEvent1;