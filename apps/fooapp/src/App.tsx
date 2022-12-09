import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

import { Button } from "ui"
import { AlertCircle } from "foolib"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Button/> */}
      <AlertCircle/>
    </div>
  )
}

export default App
