import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

import { Button } from "ui"

import { FooCircle } from "foolib"
// import { AlertCircle } from "icons"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Button/> */}
      <FooCircle/>
    </div>
  )
}

export default App
