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

        <header className="fixed top-0 w-full h-[55px] flex justify-between space-x-4 items-center bg-[#F4C84B] p-2">

            <div className="flex items-center">
                <Link to="/"
                    className="w-10 h-10 rounded-full mb-2"><img src="../../public/icons/MaterialSymbolsHome.png" alt="home" />
                </Link>

                {user && <h1 className="text-left font-bold text-xs">{user.name}</h1>}
            </div>


            <div className="flex items-center">
                <img className="w-[50px] flex " src="../../public/icons/Logo JiveHub.png" alt="LOGO" />
            </div>

            <button className="space-between mr-1 h-10 w-10" onClick={handleLogoutClick} > <img src="../../public/icons/HumbleiconsLogout.png" alt="menu" /></button>

        </header>

    )

}

export default Header