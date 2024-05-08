//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'

import MeetingsList from '../components/MeetingsList'
import CreateMeeting from '../components/CreateMeeting'

import Profile from '../components/Profile'

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
    const [meetingsList, setMeetingsList] = useState(null)

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


    //UPCOMING MEETINGS, NO SE MUESTRAN MEETINGS PASADOS
    const loadMeetings = () => {
        logger.debug('MeetingList -> loadMeetings')

        try {
            logic.retrieveMeetings()
                .then(retrievedMeetings => {
                    const upcomingMeetings = retrievedMeetings.filter(meeting => new Date(meeting.date) > new Date())
                    setMeetingsList(upcomingMeetings)
                })
                .catch(error => showFeedback(error, 'error'));
        } catch (error) {
            showFeedback(error)
        }
    }


    useEffect(() => {
        loadMeetings()
    }, [stamp])



    return <>

        <div>
            <Header onUserLoggedOut={onLogout} />




            <main className="mb-50px flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">
                <div>
                <h1 className='text-black text-center font-bold mt-20'>Upcoming Meetings</h1>
                </div>

                {/* 
                <CreateMeeting onCancelClick={handleCreateMeetingCancelClick} onMeetingCreated={handleMeetingCreated} /> */}
                <Routes>
                    <Route path="/" element={
           
                    <MeetingsList stamp={stamp} setStamp={setStamp} onEditMeetingClick={handleEditMeetingClick} meetings={meetingsList} />} />


                    {<Route path="/profile/:name" element={<Profile 
                    onUserLoggedOut={onLogout}
                    onEditMeetingClick={handleEditMeetingClick}
                    // onCreatedClick={handleCreatedClick}
                    // onJoinedClick={handleJoinedClick} 
                    />} />}
                </Routes>


                {view === 'create-meeting' && <CreateMeeting onCancelClick={handleCreateMeetingCancelClick} onMeetingCreated={handleMeetingCreated} />}

                {view === 'edit-meeting' && <EditMeeting meeting={meeting} onCancelClick={handleEditMeetingCancelClick} onMeetingEdited={handleMeetingEdited} />}



                <footer className="fixed bottom-0 w-full h-[50px] flex justify-between space-x-4 items-center bg-[#F4C84B] p-1">

                    <button className="w-10 h-10 rounded-full ml-2"><img src="../../public/icons/TablerSearch.png" alt="search" /></button>

                    <button onClick={handleCreateMeetingClick} className="w-10 h-10 rounded-full mr-4"><img src="../../public/icons/CreateMeeting.png" alt="search" /></button>

                    <Link to="/profile">
                        <button>{user && user.avatar ? <img src={user.avatar} alt="profile pic" className="w-20 h-20 rounded-full mr-4"></img> : <img className="w-11 h-11 rounded-full mr-2" src="../../public/icons/Profile.png" alt="profile pic"></img>}</button>
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
