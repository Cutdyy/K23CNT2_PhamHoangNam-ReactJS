import React, { Component } from 'react';
import PhnEventForm1 from './components/PhnEventForm1';
import PhnEventForm2 from './components/PhnEventForm2';
import PhnEventForm3 from './components/PhnEventForm3'; // Thêm import mới
import PhnEventForm4 from './components/PhnEventForm4';
import PhnEventForm5 from './components/PhnEventForm5';
class PhnApp extends Component {
  render() {
    return (
      <div className='container border my-3 bgwhite'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr/>
        <PhnEventForm1 />
        <PhnEventForm2 />
        <PhnEventForm3 />  {/* Thêm component này để sử dụng */}
        <PhnEventForm4 />
        <PhnEventForm5 />
      </div>
    );
  }
}

export default PhnApp;

