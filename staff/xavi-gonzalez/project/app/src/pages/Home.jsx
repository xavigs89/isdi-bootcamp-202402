//@ts-nocheck

import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'


import { useContext } from '../context'

function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)
    // const [view, setView] = useState(null)
    // const [stamp, setStamp] = useState(null)


    const { showFeedback } = useContext()

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }, [])


    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    logger.debug('Home -> render')


    return <>


        <div>
            <header className="px-[5vw] fixed top-0 bg-white w-full text-center">
                {user && <h1>Welcome, {user.name}!</h1>}

                <nav className='text-right'>
                    <button onClick={handleLogoutClick}><img src="../../public/icons/HumbleiconsLogout.png" className="w-20 h-20" alt="" /></button>
                </nav>
            </header>
        </div>

        <main className="my-[50px] px-[5vw]">
        </main>

        <footer>{user && user.avatar ? <img src={user.avatar} alt="profile pic" className="w-20 h-20 rounded-full mr-4"></img> : <img className="flex flex-col w-20 h-20 rounded-full mr-2"  src="../../public/icons/CarbonUserAvatarFilledAlt.png" alt="profile pic"></img>}
        </footer>

    </>

}




export default Home