import React, { Component } from 'react';

class PhnEventForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: 'css'
    };
  }

  handleChange = (event) => {
    this.setState({ course: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`Khóa học đã chọn khi submit: ${this.state.course}`);
    event.preventDefault();
  };

  render() {
    return (
      <div className="p-3" 
           style={{ backgroundColor: '#f8d7da', borderRadius: '5px', padding: '15px', marginBottom: '20px' }}>
        <h3 style={{ color: '#721c24', fontWeight: 'bold' }}>Form Select</h3>
        <form onSubmit={this.handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <label style={{ marginRight: '10px' }}>
            Chọn khóa học:
            <select value={this.state.course} onChange={this.handleChange} style={{ marginLeft: '5px' }}>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="js">JavaScript</option>
              <option value="reactjs">ReactJS</option>
            </select>
          </label>
          <button type="submit" style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    );
  }
}

export default PhnEventForm2;