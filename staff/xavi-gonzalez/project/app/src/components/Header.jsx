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

        <header className="fixed top-0 w-full h-[50px] flex items-center justify-center bg-[#F4C84B] p-2">


            <Link to="/"
                className="w-10 h-10 rounded-full mr-4"><img src="../../public/icons/MaterialSymbolsHome.png" alt="home" />
            </Link>

            <div className="  flex-col text-left">
                {/* ml-auto mr-1 flex */}

                {user && <h1 className="text-left font-bold text-xs">{user.name}</h1>}
                {/* {user && <p className="text-white text-lg font-light">{user.email}</p>} */}
            </div>


            <div className=''>

                <img className="w-[50px] flex " src="../../public/icons/Xavi-Logo.png" alt="LOGO" />

            </div>

            <button className="ml-auto mr-1 h-10 w-10" onClick={handleLogoutClick} > <img src="../../public/icons/HumbleiconsLogout.png" alt="menu" /></button>

        </header>

    )

}

export default Header