import React from 'react'
import PhnUseState from './components/PhnUseState'
import PhnUseStateListObject from './components/PhnUseStateListObject'
import PhnUseEffect1 from './components/PhnUseEffect1'
import PhnCounter from './components/PhnCounter'
import PhnInputFocus from './components/PhnInputFocus'
import PhnAutoCounter from './components/PhnAutoCounter'
import PhnConfirmExit from './components/PhnConfirmExit'
import PhnThemeProvider, { PhnThemedComponent } from './components/PhnThemeProvider'

export default function PhnApp() {
  return (
    <div className='container border mt-3'>
        <h1> React Hook </h1>
      <hr/>
      <PhnUseState />
      <PhnUseStateListObject />

      <PhnUseEffect1 />

      <PhnCounter />

      <PhnInputFocus />

      <PhnAutoCounter />

      <PhnConfirmExit />

      <PhnThemeProvider>
        <PhnThemedComponent />
      </PhnThemeProvider>
    </div>
  )
}
