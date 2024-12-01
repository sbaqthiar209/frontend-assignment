import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './pages/table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Table</h2>
      <Table/>
    </>
  )
}

export default App
