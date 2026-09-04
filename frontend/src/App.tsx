import { Route, Routes } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Button>Adicionar ao carrinho</Button>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App