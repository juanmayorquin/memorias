import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Landing } from './routes/Landing.jsx'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Landing/>
    </>
  )
}

export default App
