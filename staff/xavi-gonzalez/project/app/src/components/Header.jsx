import { useEffect, useState } from 'react'
import logic from '../logic'

function Header ({ onUserLoggedOut }) {
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
    
        <header className="flex items-center bg-[#bcda53] p-1">
            <button
            className="w-10 h-10 rounded-full mr-4"><img src="../../public/icons/MaterialSymbolsHome.png" alt="search" />
            {/* {user && user.avatar ? <img src={user.avatar} alt="profile pic" className="w-20 h-20 rounded-full mr-4"></img> : <img className="w-10 h-10 rounded-full mr-2"  src="../../public/icons/CarbonUserAvatarFilledAlt.png" alt="profile pic"></img>} */}
            </button>  
            
            <div className=" ml-auto mr-1 flex flex-col text-center">
            {user && <h1 className="text-center">{user.name}</h1>}
            {/* {user && <p className="text-white text-lg font-light">{user.email}</p>} */}
            </div>
    
            <button className="ml-auto mr-1 h-10 w-10" onClick={handleLogoutClick} > <img src="../../public/icons/HumbleiconsLogout.png" alt="menu" /></button>
    
        </header>
        
    )

}

export default Header