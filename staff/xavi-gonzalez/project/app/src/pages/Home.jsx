//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'

import MeetingList from '../components/MeetingList'
import CreateMeeting from '../components/CreateMeeting'

import Profile from '../components/Profile'

import Meeting from '../components/Meeting'
import EditMeeting from '../components/EditMeeting'

import Header from '../components/Header'

import { Link } from 'react-router-dom'

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



    // EDITAR MEETING
    const handleEditMeetingClick = meeting => {
        setView('edit-meeting')
        setMeeting(meeting)
    }

    const handleMeetingEdited = () => {
        clearView()
        setStamp(Date.now())
        setMeeting(null)
    }

    const handleEditMeetingCancelClick = () =>
        clearView()

    logger.debug('Home -> render')



    return <>

        <div>
            <Header onUserLoggedOut={onLogout} />




            <main className="flex flex-col h-screen items-center my-[45px] px-[1vw] bg-[#249D8C]">
                <h1 className='text-black text-center font-bold mt-4'>Upcoming Meetings</h1>

                {/* 
                <CreateMeeting onCancelClick={handleCreateMeetingCancelClick} onMeetingCreated={handleMeetingCreated} /> */}
                <Routes>
                    <Route path="/" element={<MeetingList stamp={stamp} onEditMeetingClick={handleEditMeetingClick} />} />

                    {<Route path="/profile/:name" element={<Profile />} />}
                </Routes>


                {view === 'create-meeting' && <CreateMeeting onCancelClick={handleCreateMeetingCancelClick} onMeetingCreated={handleMeetingCreated} />}

                {view === 'edit-meeting' && <EditMeeting meeting={meeting} onCancelClick={handleEditMeetingCancelClick} onMeetingEdited={handleMeetingEdited} />}



                <footer className="fixed bottom-0 w-full h-[50px] flex justify-between space-x-4 items-center bg-[#F4C84B] p-2">

                    <button className="w-8 h-8 rounded-full ml-2"><img src="../../public/icons/OcticonSearch.png" alt="search" /></button>

                    <button onClick={handleCreateMeetingClick} className="w-10 h-10 rounded-full mr-4"><img src="../../public/icons/BiPlusSquare.png" alt="search" /></button>

                    <Link to="/profile">
                        <button>{user && user.avatar ? <img src={user.avatar} alt="profile pic" className="w-20 h-20 rounded-full mr-4"></img> : <img className="w-10 h-10 rounded-full mr-2" src="../../public/icons/CarbonUserAvatarFilledAlt.png" alt="profile pic"></img>}</button>
                    </Link>

                </footer>

            </main>

        </div>

    </>

}

export default Home


// LOGOUT
// const handleLogoutClick = () => {
//     try {
//         logic.logoutUser()
//     } catch (error) {
//         logic.cleanUpLoggedInUserId()
//     } finally {
//         onUserLoggedOut()
//     }
// }
