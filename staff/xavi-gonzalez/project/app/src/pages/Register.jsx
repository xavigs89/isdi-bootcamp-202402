//@ts-nocheck

import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Register({ onUserRegistered, onLoginClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        // const birthdate = form.birthdate.value
        const email = form.email.value
        // const username = form.username.value
        const password = form.password.value
        const confirmedPassword = form.confirm.value

        try {
            logic.registerUser(name, email, password, confirmedPassword)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    logger.debug('Register -> render')

    return (
    <main className="display-flex">
        <h1 className='font-bold text-center'>Register</h1>

        <form className='flex flex-col items-center mt-10' onSubmit={handleSubmit}>
            <div className=''>
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" />

            {/* <label htmlFor="birthdate">Age</label>
            <input type="date" id="birthdate" /> */}

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />

            {/* <label htmlFor="username">Username</label>
            <input id="username" /> */}

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" id="confirm" />

            <button className="round-button" type="submit">Register</button>

            </div>
        </form>

        <a href="" className='font-bold text-center' onClick={handleLoginClick}>Login</a>

    </main>
    )
}


export default Register