import React from 'react'

import { Button } from 'packages/common'

import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">Booklyer</header>
      <Button onClick={() => console.log('CLICK')}>Click this!</Button>
      <Button disabled={true} onClick={() => console.log('CLICK')}>
        Disabled Button
      </Button>
    </div>
  )
}

export default App
