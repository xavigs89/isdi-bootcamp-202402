//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'
import CreateMeeting from '../components/CreateMeeting'
import MeetingList from '../components/Meeting'

import Header from '../components/Header'


import { Routes, Route } from 'react-router-dom'


import { useContext } from '../context'

function Home({ onUserLoggedOut }) {

    const onLogout = () => onUserLoggedOut()

    const [user, setUser] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)
    const [meeting, setMeeting] = useState(null)

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

    const clearView = () => setView(null)


    // CREAR MEETING
    const handleMeetingCreated = () => {
        clearView()
        setStamp(Date.now())
    }

    const handleCreateMeetingCancelClick = () =>
        clearView()

    const handleCreateMeetingClick = () => setView('create-meeting')


    // LOGOUT
    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    // EDITAR MEETING
    const handleEditMeetingClick = meeting => {
        setView('edit-meeting')
        setPost(meeting)
    }

    const handleMeetingEdited = () => {
        clearView()
        setStamp(Date.now())
        setAdd(null)
    }

    const handleEditMeetingCancelClick = () =>
        clearView()

    logger.debug('Home -> render')



    return <>
        <main className='h-screen bg-[#f2f4f7]'>
            <Header onUserLoggedOut={onLogout} />

            {/* <Footer /> */}


            <footer className="fixed bottom-0 w-full h-[50px] flex justify-between space-x-4 items-center box-border bg-[#bcda53] p-1">
                
                    <button className="w-10 h-10 rounded-full mr-4"><img src="../../public/icons/OcticonSearch.png" alt="search" /></button>
                    <button className="w-10 h-10 rounded-full mr-4"><img src="../../public/icons/BiPlusSquare.png" alt="search" /></button>
                    <button>{user && user.avatar ? <img src={user.avatar} alt="profile pic" className="w-20 h-20 rounded-full mr-4"></img> : <img className="w-10 h-10 rounded-full mr-2" src="../../public/icons/CarbonUserAvatarFilledAlt.png" alt="profile pic"></img>}</button>

    
            </footer>

        </main>
        {/* <div>
            <main className="px-[5vw] fixed top-0 bg-white w-full text-center">
                {user && <h1>Welcome, {user.name}!</h1>}

                <nav className='text-right'>

                    <button className="w-full h-[50px] flex justify-center items-center p-[10px] box-border bg-white" onClick={handleCreateMeetingClick}>➕</button>

                    <button onClick={handleLogoutClick}><img src="../../public/icons/HumbleiconsLogout.png" className="w-20 h-20" alt="" /></button>
                </nav>
            </main>
        </div>

        <main className="my-[50px] px-[5vw]">
        </main>

        <footer>{user && user.avatar ? <img src={user.avatar} alt="profile pic" className="w-20 h-20 rounded-full mr-4 bottom-0"></img> : <img className="flex flex-col w-20 h-20 rounded-full mr-2" src="../../public/icons/CarbonUserAvatarFilledAlt.png" alt="profile pic"></img>}
        </footer> */}

    </>

}




export default Home