import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './app.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center', height: '100vh', flexDirection: 'column', width: '100%' }}>
      <div >
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> EV Frontend2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          EV Frontend2
        </p>
      </div>
    </div>
  )
}

export default App
