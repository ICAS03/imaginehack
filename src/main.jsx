import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginPage from './components/Authentication/LoginPage.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Speech_to_text from './components/Speech_to_text.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Speech_to_text></Speech_to_text>
  </React.StrictMode>
)
