import React, { Component } from 'react';
import PhnLoginControl from './components/PhnLoginControl';
import PhnRenderList from './components/PhnRenderList';
import PhnRenderListStudent from './components/PhnRenderListStudent';
import PhnEvent1 from './components/PhnEvent1';

class PhnApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
          <h1 className='text-center'>Pham Hoang Nam - Render condition, List key</h1>
          <hr/>
          <PhnLoginControl />

          <PhnRenderList />

          <PhnRenderListStudent />

          <PhnEvent1 />
      </div>
    );
  }
}

export default PhnApp;
