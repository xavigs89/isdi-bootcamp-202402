//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'

import MeetingsList from '../components/MeetingsList'
import CreateMeeting from '../components/CreateMeeting'
import EditMeeting from '../components/EditMeeting'
import Profile from '../components/Profile'
import OtherUserProfile from '../components/OtherUserProfile'

import Header from '../components/Header'
import Footer from '../components/Footer'

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

    //para cargar la información del usuario al cargar el componente
    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)

        }
    }, [])

    //CARGAR SOLO MEETINGS FUTUROS
    const loadMeetings = () => {
        logger.debug('MeetingsList -> loadMeetings')

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

    //llamar a la función loadMeetings cada vez que el estado stamp cambie
    useEffect(() => {
        loadMeetings()
    }, [stamp])


    // BOTON PARA CREAR MEETING
    const handleCreateMeetingClick = () => setView('create-meeting')

    // CREAR MEETING CON EXITO
    const handleMeetingCreated = () => {
        clearView()
        setStamp(Date.now())
    }
    // CANCELAR CREAR MEETING
    const handleCreateMeetingCancelClick = () =>
        clearView()


    // BOTON PARA EDIT MEETING
    const handleEditMeetingClick = meeting => {
        setView('edit-meeting')
        setMeeting(meeting)
    }

    // EDITAR MEETING CON EXITO
    const handleMeetingEdited = () => {
        clearView()
        setStamp(Date.now())
        setMeeting(null)
    }

    // CANCELAR EDIT MEETING
    const handleEditMeetingCancelClick = () =>
        clearView()


    logger.debug('Home -> render')


    //BOTON PARA EDIT ABOUT ME
    const handleEditAboutClick = () => {
        setView('edit-about')
        setAbout(about)
    }

    // EDITAR ABOUT CON EXITO
    const handleAboutEdited = () => {
        clearView()
        setStamp(Date.now())
        setAbout(null)
    }

    // CANCELAR EDIT ABOUT
    const handleEditAboutCancelClick = () =>
        clearView()


    //JOIN
    const handleJoinMeetingClick = () => {
        clearView()
        loadMeetings()
    }

    //UNJOIN
    const handleUnjoinMeetingClick = () => {
        clearView()
        loadMeetings()
    }


    return <>

        <div>
            <Header onUserLoggedOut={handleLoggedOut} />

            <main className="mb-50px flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">
                <div>
                    <h1 className='text-black text-center font-bold mt-20'>Upcoming Meetings</h1>
                </div>

                <Routes>
                    <Route path="/" element={<MeetingsList meetings={meetings} stamp={stamp} setStamp={setStamp}
                        onEditMeetingClick={handleEditMeetingClick}
                        onJoinMeetingClick={handleJoinMeetingClick}
                        onUnjoinMeetingClick={handleUnjoinMeetingClick} />} />

                    <Route path="/profile" element={<Profile user={user}
                        onEditAboutClick={handleEditAboutClick}
                        onEditMeetingClick={handleEditMeetingClick}
                    />} />

                    <Route path="/user" element={<OtherUserProfile user={user} />} />
                </Routes>

                {view === 'create-meeting' && <CreateMeeting
                    onCancelClick={handleCreateMeetingCancelClick}
                    onMeetingCreated={handleMeetingCreated} />}

                {view === 'edit-meeting' && <EditMeeting meeting={meeting}
                    onCancelClick={handleEditMeetingCancelClick}
                    onMeetingEdited={handleMeetingEdited} />}

                {view === 'edit-about' && <EditAbout about={about}
                    onCancelClick={handleEditAboutCancelClick}
                    onAboutEdited={handleAboutEdited}
                />}

            </main>

            <Footer user={user}
                handleCreateMeetingClick={handleCreateMeetingClick} />

        </div>
    </>

}

export default Home