//@ts-nocheck
import { logger } from './utils'

import logic from './logic'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import UserProfile from './components/UserProfile'
import CreateMeeting from './components/CreateMeeting'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
//import Feedback from './components/Feedback'
import { useState } from 'react'
import { Context } from './context'
//import Confirm from './components/Confirm'
import { errors } from 'com'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'


const { UnauthorizedError } = errors


function App() {

  const [feedback, setFeedback] = useState(null)
  const [confirm, setConfirm] = useState(null)

  const navigate = useNavigate()

  const goToLogin = () => navigate('/login')

  const handleLoginClick = () => goToLogin()

  const handleRegisterClick = () => navigate('/register')

  const handleUserLoggedOut = () => goToLogin()

  const handleFeedbackAcceptClick = () => setFeedback(null)

  const handleFeedback = (error, level = 'warn') => {
    if (error instanceof UnauthorizedError) {
      logic.logoutUser()

      level = 'error'

      goToLogin()
    }

    setFeedback({ message: error.message, level })
  }

  const handleUserLoggedIn = () => {
    try {
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }



  const handleConfirm = (message, callback) => setConfirm({ message, callback })

  logger.debug('App -> render')

  return <>
    <Context.Provider value={{ showFeedback: handleFeedback, showConfirm: handleConfirm }}>
      <Routes>
        <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login
          onRegisterClick={handleRegisterClick}
          onUserLoggedIn={handleUserLoggedIn} />} />

        <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register
          onLoginClick={handleLoginClick}
          onUserRegistered={handleLoginClick} />} />

        <Route path="/*" element={logic.isUserLoggedIn() ? <Home
          onUserLoggedOut={handleUserLoggedOut} /> : <Navigate to="/login" />} />


        <Route path="/userprofile" element={logic.isUserLoggedIn() ? <UserProfile
          onUserLoggedOut={handleUserLoggedOut} /> : <Navigate to="/login" />} />



        {/* <Route path="/createMeeting" element={<CreateMeeting />} /> */}
      </Routes>
    </Context.Provider>



  </>

}

export default App





{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}