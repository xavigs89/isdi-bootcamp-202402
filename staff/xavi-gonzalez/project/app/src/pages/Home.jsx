//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'

import MeetingsList from '../components/MeetingsList'
import CreateMeeting from '../components/CreateMeeting'
import EditMeeting from '../components/EditMeeting'
import Profile from '../components/Profile'

import Header from '../components/Header'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useContext } from '../context'

function Home() {

    const navigate = useNavigate()

    const { showFeedback, stamp, setStamp } = useContext()

    const handleLoggedOut = () => {
        navigate("/login")
    }
    const [user, setUser] = useState(null)
    const [view, setView] = useState(null)
    const [meeting, setMeeting] = useState(null)
    const [meetings, setMeetings] = useState(null)
    
    
    const clearView = () => setView(null)


    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)

        }
    }, [])


    //ALL MEETINGS, PASADOS Y FUTUROS
    const loadMeetings = () => {
        logger.debug('MeetingList -> loadMeetings')

        try {
            logic.retrieveMeetings()
            .then(retrievedMeetings => {
                const upcomingMeetings = retrievedMeetings.filter(meeting => new Date(meeting.date) > new Date())
                setMeetings(upcomingMeetings)
            })
            .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadMeetings()
    }, [stamp])


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

    const handleJoinMeetingClick = () => {

        clearView()
        loadMeetings()
    }

    const handleUnJoineMeetingClick = () => {
        clearView()
        loadMatches()
    }


    return <>

        <div>
            <Header onUserLoggedOut={handleLoggedOut} />

            <main className="mb-50px flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">
                <div>
                <h1 className='text-black text-center font-bold mt-20'>Upcoming Meetings</h1>
                </div>

                <Routes>
                    <Route path="/" element={
           
                    <MeetingsList meetings={meetings} stamp={stamp} setStamp={setStamp} onEditMeetingClick={handleEditMeetingClick} onJoinMeetingClick={handleJoinMeetingClick}
                    onUnjoinMeetingClick={handleUnJoineMeetingClick}/>} />


                    {<Route path="/profile" element={<Profile 
                    // onUserLoggedOut={onLogout}
                    // onEditMeetingClick={handleEditMeetingClick}
                    />} />}

                </Routes>


                {view === 'create-meeting' && <CreateMeeting onCancelClick={handleCreateMeetingCancelClick} onMeetingCreated={handleMeetingCreated} />}

                {view === 'edit-meeting' && <EditMeeting meeting={meeting} 
                onCancelClick={handleEditMeetingCancelClick} 
                onMeetingEdited={handleMeetingEdited} />}



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


{/*                 
                <CreateMeeting onCancelClick={handleCreateMeetingCancelClick} onMeetingCreated={handleMeetingCreated} /> */}
