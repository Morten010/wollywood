import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Plakater from './pages/Plakater'
import Om from './pages/Om'
import Kontakt from './pages/Kontakt'
import Login from './pages/Login'

function App() {

  return (
    <main className='white-bg'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/plakater' element={<Plakater />} />
          <Route path='/om' element={<Om />} />
          <Route path='/kontakt' element={<Kontakt />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
