import { logger } from '../utils'

function Landing(props) {
    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    logger.debug('Landing -> render')

    return <main className='my-[50px] px-[5vw]'>
        <h1 className='flex justify-center'>Landing</h1>

        <a href="" onClick={handleLoginClick}>Login</a> or <a href="" onClick={handleRegisterClick}>Register</a>
    </main>
}

export default Landing