import { logger, showFeedback } from '../utils'

import logic from '../logic'

function Login(props) {
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit', username, password)

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    props.onUserLoggedIn()
                })
                .catch(showFeedback)
            } catch (error) {
                showFeedback(error)
            }
    }
      
    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    logger.debug('Login -> render')

    return <main className="my-[50px] px-[5vw]">
        <h1 className="flex justify-center">Login</h1>

        <form className='flex flex-col' onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button className="round-button" type="submit">Login</button>
        </form>

        <a href="" onClick={handleRegisterClick}>Register</a>
    </main>
}

export default Login