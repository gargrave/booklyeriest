import React from 'react'

import { Button } from 'components/common'

import './App.css'

export const App: React.FC = () => {
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
