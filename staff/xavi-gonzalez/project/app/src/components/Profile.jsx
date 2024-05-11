// //@ts-nocheck
import logic from '../logic'
import { logger } from '../utils'

import RoundButton from './library/RoundButton'

import Header from './Header'
import { useContext } from '../context'
import MeetingsList from './MeetingsList'
import About from './About'
import EditMeeting from './EditMeeting'
import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react'


function Profile({ }) {

    const { showFeedback, stamp, setStamp } = useContext()

    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const handleLoggedOut = () => {
        navigate("/login")
    }

    const [meeting, setMeeting] = useState(false)
    const [view, setView] = useState('close')

    const [createdMeetingsList, setCreatedMeetingsList] = useState(false)
    const [joinedMeetingsList, setJoinedMeetingsList] = useState(false)
    //const [aboutMe, setAboutMe] = useState(false)

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



    //ALL CREATED MEETINGS, PASADOS Y FUTUROS
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


    //ALL JOINED MEETINGS, PASADOS Y FUTUROS
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

    const handleAboutMeClick = () => {
        loadCreatedMeetings()
    }


    //COMPO EDIT MEETING PROPS
    const handleMeetingEdited = () => {
        clearView()
        loadCreatedMeetings()
        setStamp(Date.now())
        setMeeting(null)
    }

    //CANCELAR FORM DE EDIT MEETING
    const handleEditMeetingCancelClick = () => setView(null)

    const handleEditClick = meeting => {
        onEditMeetingClick(meeting)
        setView('edit-meeting')
    }

    return <>
        <main className="flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">
            <Header onUserLoggedOut={handleLoggedOut} />

            <section>

                <div className="space-between flex items-center grid-cols-4 gap-4 mt-16">

                    <button onClick={toogleViewCreated} id="createdmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Created Meetings</button>

                    <button onClick={toogleViewJoined} id="joinedmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Joined Meetings</button>

                    <button onClick={toogleViewAboutMe} id="aboutme-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">About Me</button>

                </div>
                {/* 
                {createdMeetingsVisibility &&
                    (createdMeetingsList && createdMeetingsList.length > 0 ?
                        <MeetingsList meetings={createdMeetingsList}
                            onEditMeetingClick={handleEditClick}
                            onJoinMeetingClick={handleJoinedMeetingsClick}
                            onUnjoinMeetingClick={handleUnJoinMeetingClick} />
                        :
                        <div className="bg-white p-4 rounded">
                            <p className="m-0">You have no meetings created yet</p>
                        </div>
                    )
                } */}

                {view === 'open-created' && <MeetingsList meetings={createdMeetingsList}
                    onEditMeetingClick={handleEditClick}
                    onJoinMeetingClick={handleJoinedMeetingsClick}
                    onUnjoinMeetingClick={handleUnJoinMeetingClick} />}

                {view === 'open-joined' && <MeetingsList meetings={joinedMeetingsList}
                    onEditMeetingClick={handleEditClick}
                    onUnjoinMeetingClick={handleUnJoinMeetingClick}
                />}

                {view === 'open-aboutMe' && <About user={aboutMe}
                    onEditMeetingClick={handleEditClick}
                    onUnjoinMeetingClick={handleUnJoinMeetingClick}
                />}

                {/* {aboutMeVisibility && (
                    <div className="bg-white p-4 rounded">
                        <p>{user.about}</p>
                    </div>
                )} */}
                {/* 
                {aboutMeVisibility && (
                    <div className="bg-white p-4 rounded">
                        <p>{user && user.about === null ? 'null ABOUT' : JSON.stringify(user)}</p>
                    </div>
                )} */}

                {view === 'edit-meeting' && <EditMeeting meeting={meeting}
                    onCancelClick={handleEditMeetingCancelClick}
                    onMeetingEdited={handleMeetingEdited} />}

            </section>
        </main>
    </>

}

export default Profile






















// const handleCreatedClick = meeting => onCreatedClick(meeting)

// const handleJoinedClick = meeting => onJoinedClick(meeting)

// const loadMeetings = () => {

//     try {
//         logic.retrieveCreatedMeetings()
//             .then(setMeetings)
//             .catch(error => alert(error))
//     } catch (error) {
//         showFeedback(error)
//     }
// }

// useEffect(() => {
//     loadMeetings()
// }, [])


// return <h1>hello {name}</h1>

{/* <MeetingList meetings={meetings} /> */ }


