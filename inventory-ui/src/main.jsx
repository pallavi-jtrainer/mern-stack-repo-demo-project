import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//authProvider
import { AuthProvider } from './auth/authContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <AuthProvider>
    <App />
  </AuthProvider>
)
