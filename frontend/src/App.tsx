import { Route, Routes } from 'react-router-dom'

function Home() {
  return <h1>E-commerce Platform</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
