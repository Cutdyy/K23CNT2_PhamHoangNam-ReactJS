import React, { Component } from 'react'; 

class PhnEventForm5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phnName: 'Chung',
            phnAge: 45,
            phnGender: 'Female',
            phnCourse: 'CSS3'
        };
    }

    // Xử lý sự kiện thay đổi input
    phnHandleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    // Xử lý sự kiện submit form
    phnHandleSubmit = (event) => {
        event.preventDefault();
        alert(
            `Student Name: ${this.state.phnName}\n` +
            `Student Age: ${this.state.phnAge}\n` +
            `Student Gender: ${this.state.phnGender}\n` +
            `Selected Course: ${this.state.phnCourse}`
        );
        
        // Chuyển dữ liệu lên component cha
        if (this.props.onPhnHandleSubmit) {
            this.props.onPhnHandleSubmit(this.state);
        }
    };

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info</h2>
                <form onSubmit={this.phnHandleSubmit}>
                    <div>
                        <label htmlFor='phnName'>Student Name:</label>
                        <input type='text' name='phnName' id='phnName'
                            value={this.state.phnName}
                            onChange={this.phnHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='phnAge'>Student Age:</label>
                        <input type='text' name='phnAge' id='phnAge'
                            value={this.state.phnAge}
                            onChange={this.phnHandleChange} />
                    </div>
                    <div>
                        <label>Student Gender:</label>
                        <div>
                            <input type='radio' name='phnGender' id='phnMale' value='Male'
                                checked={this.state.phnGender === 'Male'}
                                onChange={this.phnHandleChange} />
                            <label htmlFor='phnMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='phnGender' id='phnFemale' value='Female'
                                checked={this.state.phnGender === 'Female'}
                                onChange={this.phnHandleChange} />
                            <label htmlFor='phnFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='phnGender' id='phnNone' value='None'
                                checked={this.state.phnGender === 'None'}
                                onChange={this.phnHandleChange} />
                            <label htmlFor='phnNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='phnCourse'>Select Course:</label>
                        <select name='phnCourse' id='phnCourse'
                            value={this.state.phnCourse}
                            onChange={this.phnHandleChange}>
                            <option value='HTML5'>HTML5</option>
                            <option value='CSS3'>CSS3</option>
                            <option value='Javascript'>Javascript</option>
                            <option value='Jquery'>Jquery</option>
                            <option value='Bootstrap'>Bootstrap</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default PhnEventForm5;