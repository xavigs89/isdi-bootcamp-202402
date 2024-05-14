//@ts-nocheck
import { useEffect, useState } from 'react'
import logic from '../logic'

import { Link } from 'react-router-dom'


function Header({ onUserLoggedOut }) {

    const [user, setUser] = useState(null)

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => showFeedback(error))
        } catch (error) {
            showFeedback(error)
        }
    }, [])


    return (

        <header className="fixed top-100 w-full h-[62px] flex justify-between space-x-4 items-center bg-[#F4C84B] p-2">

            <div className="flex items-center space-x-1">
                <Link to="/">

                    <img className="w-[50px] flex " src="../../public/icons/Logo JiveHub.png" alt="LOGO" />

                </Link>

            </div>

            <div className="absoluteflex items-center">

                {user && <h1 className="text-center font-bold">Welcome, {user.name}!</h1>}
            </div>

            <button className="h-12 w-12" onClick={handleLogoutClick} > <img src="../../public/icons/HumbleiconsLogout.png" alt="menu" /></button>

        </header>
    )
}

export default Header