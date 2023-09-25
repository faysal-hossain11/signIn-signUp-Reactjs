
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home.jsx/Home'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
