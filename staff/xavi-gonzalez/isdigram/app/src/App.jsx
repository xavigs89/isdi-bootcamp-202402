import { logger } from './utils'

import logic from './logic'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
//import Chat from './pages/Chat'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

function App() {
  //ALTERNATIVA
  // const viewState = useState(logic.isUserLoggedIn() ? 'home' : 'landing')
  // const view = viewState[0]
  // const setView = viewState[1]

    const navigate = useNavigate()

    const goToLogin = () => navigate('/login')

    const handleLoginClick = () => goToLogin()
  
    const handleRegisterClick = () => navigate('/register')
  
    const handleUserLoggedIn = () => navigate( '/')
  
    const handleUserLoggedOut = () => goToLogin()

    //handleChatClick = () => goToChat()

    //goToChat = () => setState({ view: 'chat' })

    //handleHomeClick = () => goToHome()

    //goToHome = () => setState({ view: 'home' })

    logger.debug('App -> render')


  //VERSION ANTIGUA
  // if (view === 'landing')
  //   return <Landing onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
  // else if (view === 'login')
  //   return <Login onRegisterClick={handleRegisterClick} onUserLoggedIn={handleUserLoggedIn} />
  // else if (view === 'register')
  //   return <Register onLoginClick={handleLoginClick} onUserRegistered={handleLoginClick} />
  // else if (view === 'home')
  //   return <Home onUserLoggedOut={handleUserLoggedOut} /> // new Home().render(...)
  // else
  //   return <h1>🤨</h1>

return <>
<Routes>
  <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClick={handleRegisterClick} onUserLoggedIn={handleUserLoggedIn} />} />

  <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onLoginClick={handleLoginClick} onUserRegistered={handleLoginClick} />} />
  
  <Route path="/*" element={logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleUserLoggedOut} /> : <Navigate to="/login" />} />
 
    {/* {view === 'chat' && <Chat 
      onHomeClick={handleHomeClick}
      onUserLoggedOut={handleUserLoggedOut}
      /> } */}
      </Routes>
</>
}
export default App