// //@ts-nocheck
import logic from '../logic'
import { logger } from '../utils'

import RoundButton from './library/RoundButton'

import { useContext } from '../context'

import MeetingsList from './MeetingsList'
import EditMeeting from './EditMeeting'
import EditAbout from './EditAbout'
import CreateReview from './CreateReview'
import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'


function Profile({ user, onEditMeetingClick }) {

    const { showFeedback, stamp, setStamp } = useContext()

    // const navigate = useNavigate()
    // const [user, setUser] = useState(null)

    const [meeting, setMeeting] = useState(false)

    const [view, setView] = useState('close')

    const [createdMeetingsList, setCreatedMeetingsList] = useState(false)
    const [joinedMeetingsList, setJoinedMeetingsList] = useState(false)
    const [about, setAbout] = useState(false)



    const clearView = () => setView('close')

    const toogleViewCreated = () => {
        setView(view === 'open-created' ? 'close' : 'open-created')
    }

    const toogleViewJoined = () => {
        setView(view === 'open-joined' ? 'close' : 'open-joined')
    }

    const toogleViewAboutMe = () => {
        setView(view === 'open-aboutMe' ? 'close' : 'open-aboutMe')
    }

    //MOSTRAR TODOS LOS CREATED MEETINGS, PASADOS Y FUTUROS
    const loadCreatedMeetings = () => {

        logger.debug('CreatedMeetingList -> loadMeetings')

        try {
            logic.retrieveCreatedMeetings()
                .then(setCreatedMeetingsList)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadCreatedMeetings()
    }, [stamp])


    //MOSTRAR TODOS LOS JOINED MEETINGS, PASADOS Y FUTUROS
    const loadJoinedMeetings = () => {
        logger.debug('JoinedMeetingList -> loadMeetings')

        try {
            logic.retrieveJoinedMeetings()
                .then(setJoinedMeetingsList)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadJoinedMeetings()
    }, [stamp])


    const handleJoinedMeetingsClick = () => {
        loadJoinedMeetings()
    }

    const handleUnJoinMeetingClick = () => {
        loadCreatedMeetings()
    }


    //COMPO EDIT MEETING PROPS
    const handleMeetingEdited = () => setView('open-created')

    //CANCELAR FORM DE EDIT MEETING
    const handleEditMeetingCancelClick = () => setView('open-created')

    const handleEditClick = meeting => {
        onEditMeetingClick(meeting)
        setView('edit-meeting')
    }

    //ABOUT ME
    const handleEditAboutCancelClick = () => setView(null)

    const handleAboutEdited = () => {

    }

    const handleEditAboutClick = () => {
        setView('edit-about')
    }

    //BOTON PARA CREAR REVIEW
    const handleReviewClick = (meeting) => {
        setView('create-review')
        setMeeting(meeting)
    }

    // CANCELAR CREATE REVIEW
    const handleCreateReviewCancelClick = () => {
        clearView()
        setMeeting(null)
    }

    // CREAR REVIEW CON EXITO
    const handleReviewCreated = () => {
        clearView()
        setMeeting(null)
        setStamp(Date.now())
    }

    return <main className="flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">

        <div className="rounded-xl space-between flex items-center grid-cols-4 gap-4">
            <button onClick={toogleViewCreated} id="createdmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Created Meetings</button>

            <button onClick={toogleViewJoined} id="joinedmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Joined Meetings</button>

            <button onClick={toogleViewAboutMe} id="aboutme-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">About Me</button>
        </div>

        <section >

            {view === 'open-created' && <MeetingsList
                meetings={createdMeetingsList}
                onEditMeetingClick={handleEditClick}
                onJoinMeetingClick={handleJoinedMeetingsClick}
                onUnjoinMeetingClick={handleUnJoinMeetingClick} />}

            {view === 'edit-meeting' && <EditMeeting
                meeting={meeting}
                onCancelClick={handleEditMeetingCancelClick}
                onMeetingEdited={handleMeetingEdited} />}

            {view === 'open-joined' && <MeetingsList
                meetings={joinedMeetingsList}
                onEditMeetingClick={handleEditClick}
                onUnjoinMeetingClick={handleUnJoinMeetingClick}
                onJoinMeetingClick={handleJoinedMeetingsClick}
                onReviewClick={handleReviewClick}
            />}

            {view === 'open-aboutMe' && (
                <div className="mt-4 p-4 bg-white rounded-xl text-center text-wrap">
                    <p className="mt-2"><strong>Full name:</strong> {user.name}</p>
                    <p className="mt-2"><strong>Contact:</strong> {user.email}</p>
                    <p className="mt-2">{user && user.about !== null ? user.about : "You do not have any about me yet"}</p>
                    {logic.getLoggedInUserId().userId === user.id && (
                        <div className="flex justify-end mt-4">
                            <button onClick={handleEditAboutClick} className="w-5 h-5"><img src="../../public/icons/VsEditPage.png" alt="edit about me" /></button>
                        </div>
                    )}
                </div>
            )}

            {view === 'edit-about' && <EditAbout
                user={user}
                onAboutEdited={handleAboutEdited}
                onCancelClick={handleEditAboutCancelClick} />}

            {view === 'create-review' && <CreateReview
                user={user}
                meeting={meeting}
                onCancelClick={handleCreateReviewCancelClick}
                onReviewCreated={handleReviewCreated}
                onReviewClick={handleReviewClick} />}

        </section>
    </main >
}

export default Profile


