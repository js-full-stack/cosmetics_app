import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import Container from './components/Container/Container'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
