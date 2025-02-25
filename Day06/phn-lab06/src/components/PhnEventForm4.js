import React, { Component } from 'react';

class PhnEventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptions: []
    };
  }

  handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    this.setState((prevState) => {
      if (checked) {
        return { selectedOptions: [...prevState.selectedOptions, value] };
      } else {
        return { selectedOptions: prevState.selectedOptions.filter(option => option !== value) };
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bạn đã chọn: ${this.state.selectedOptions.join(', ')}`);
  };

  render() {
    return (
      <div className='alert alert-success'>
        <h2>Form input - Checkbox</h2>
        <form onSubmit={this.handleSubmit}>
          <h3>Chọn loại trái cây yêu thích:</h3>
          <div>
            <input type='checkbox' id='apple' value='Apple' 
              checked={this.state.selectedOptions.includes('Apple')} 
              onChange={this.handleCheckboxChange} />
            <label htmlFor='apple'>Apple</label>
          </div>
          <div>
            <input type='checkbox' id='banana' value='Banana' 
              checked={this.state.selectedOptions.includes('Banana')} 
              onChange={this.handleCheckboxChange} />
            <label htmlFor='banana'>Banana</label>
          </div>
          <div>
            <input type='checkbox' id='orange' value='Orange' 
              checked={this.state.selectedOptions.includes('Orange')} 
              onChange={this.handleCheckboxChange} />
            <label htmlFor='orange'>Orange</label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PhnEventForm4;