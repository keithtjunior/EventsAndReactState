import { useState } from 'react'
import EightBall from './EightBall'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <EightBall />
    </div>
  )
}

export default App
