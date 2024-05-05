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
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (

        <header className="fixed top-0 w-full h-[62px] flex justify-between space-x-4 items-center bg-[#F4C84B] p-2">

            <div className="flex items-center space-x-1">
                <Link to="/"
                    className="w-11 h-11 rounded-full mb-2"><img src="../../public/icons/Home.png" alt="home" />
                    
                {user && <h1 className="text-center font-bold text-xs absolute">{user.name}</h1>}

                </Link>

            </div>


            <div className="absoluteflex items-center">
                <img className="w-[50px] flex " src="../../public/icons/Logo JiveHub.png" alt="LOGO" />
            </div>

            <button className="h-11 w-11" onClick={handleLogoutClick} > <img src="../../public/icons/HumbleiconsLogout.png" alt="menu" /></button>

        </header>

    )

}

export default Header