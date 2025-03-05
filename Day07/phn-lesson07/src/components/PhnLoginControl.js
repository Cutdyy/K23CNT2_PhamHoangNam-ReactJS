import React, { Component } from 'react';
import PhnLoginComp from './PhnLoginComp';
import PhnLogoutComp from './PhnLogoutComp';

class PhnLoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    // Hàm xử lý sự kiện login
    phnHandleLogin = (event) => {
        event.preventDefault();
        this.setState({
            isLoggedIn: true,
        });
    };

    phnHandleLogout = () => {
        this.setState({ isLoggedIn: false });
    };

    render() {
        let { isLoggedIn } = this.state;
        let phnElement = isLoggedIn ? <PhnLoginComp /> : <PhnLogoutComp />;
        
        return (
            <div className='alert alert-danger'>
                {phnElement}
                {
                    isLoggedIn ? 
                        <button onClick={this.phnHandleLogout}>Logout</button> 
                        : <button onClick={this.phnHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default PhnLoginControl;
