import { logger } from './utils'

import logic from './logic'

import { Component } from 'react'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Chat from './pages/Chat'

class App extends Component {
  constructor() {
    logger.debug('App')

    super()

    this.state = { view: logic.isUserLoggedIn() ? 'home' : 'landing' }
  }

  setState(state) {
    logger.debug('App -> setState', JSON.stringify(state))

    super.setState(state)
  }

  componentDidMount() {
    logger.debug('App -> componentDidMount')
  }

  goToLogin = () => this.setState({ view: 'login' })

  handleLoginClick = () => this.goToLogin()

  handleRegisterClick = () => this.setState({ view: 'register' })

  handleUserLoggedIn = () => this.setState({ view: 'home' })

  handleUserLoggedOut = () => this.goToLogin()

  handleChatClick = () => this.goToChat()

  goToChat = () => this.setState({ view: 'chat' })

  handleHomeClick = () => this.goToHome()

  goToHome = () => this.setState({ view: 'home' })


  render() {
    logger.debug('App -> render')

    if (this.state.view === 'landing')
      return <Landing onLoginClick={this.handleLoginClick} onRegisterClick={this.handleRegisterClick} />
    else if (this.state.view === 'login')
      return <Login onRegisterClick={this.handleRegisterClick} onUserLoggedIn={this.handleUserLoggedIn} />
    else if (this.state.view === 'register')
      return <Register 
      onLoginClick={this.handleLoginClick} 
      onUserRegistered={this.handleLoginClick} />
    else if (this.state.view === 'home')
      return <Home 
      onChatClick={this.handleChatClick}
      onUserLoggedOut={this.handleUserLoggedOut}
      /> 
    else if (this.state.view === 'chat')
      return <Chat 
      onHomeClick={this.handleHomeClick}
      onUserLoggedOut={this.handleUserLoggedOut}
      /> 
    else
      return <h1>🤨</h1>
  }
}

export default App