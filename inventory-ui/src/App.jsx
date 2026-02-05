// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/common/Login'
import Register from './components/common/Register'
import ProtectedRoute from './auth/ProtectedRoute'
import DashboardRouter from './components/common/DashboardRouter'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" 
          element={<ProtectedRoute><DashboardRouter/></ProtectedRoute>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>

    // <>
    //   <div>
       
    //   </div>
        
    // </>
  )
}

export default App
