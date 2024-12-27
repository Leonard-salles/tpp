import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { onAuthStateChanged } from 'firebase/auth';

import './App.css'

//pages
import Home from './pages/home/Home';
import Table from './pages/table/Table';
import Pontuacao from './pages/pontuação/Pontuacao';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

//components
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';

import { useState, useEffect } from 'react';

import { AuthProvider } from './Context/AuthContext';
import { useAuthentication } from './hooks/useAuthentication';

function App() {

  const [user, setUser] = useState(undefined)
  
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <div className='container_app'>
          <NavBar />
          <Routes>
            <Route path="/" element={user ? <Home />: <Navigate to="/login" />} />
            <Route path="/tabela-jogos" element={user ? <Table /> : <Navigate to="/login" />} />
            <Route path="/tabela" element={ user ? <Pontuacao /> : <Navigate to="/login" />} />
            <Route path="/login" element={ !user ? <Login /> : <Navigate to="/" />} />
            <Route path="/registrar" element={!user ? <Register /> : <Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
