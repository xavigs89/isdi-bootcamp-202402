//@ts-nocheck
import logic from '../logic'
import { logger } from '../utils'

import RoundButton from './library/RoundButton'

import { useParams } from 'react-router-dom'
import Header from './Header'
import { useContext } from '../context'
import MeetingsList from './MeetingsList'
import EditMeeting from './EditMeeting'

import { useState, useEffect } from 'react'


function Profile({ user, stamp, onUserLoggedOut, onCreatedClick, onJoinedClick, onEditMeetingClick }) {
    const { showFeedback } = useContext()

    const [meetings, setMeetings] = useState(false)
    const [view, setView] = useState(null)

    const [createdMeetingsList, setCreatedMeetingsList] = useState(false)
    const [joinedMeetingsList, setJoinedMeetingsList] = useState(false)


    const [createdMeetingsVisibility, setCreatedMeetingsVisibility] = useState(false)
    const [joinedMeetingsVisibility, setJoinedMeetingsVisibility] = useState(false)
    const [aboutMeVisibility, setAboutVisibility] = useState(false)

    const onLogout = () => onUserLoggedOut()

    //ALL CREATED MEETINGS, PASADOS Y FUTUROS
    const loadCreatedMeetings = () => {
        logger.debug('CreatedMeetingList -> loadMeetings')

        try {
            logic.retrieveCreatedMeetings()
                .then(retrievedMeetings => { setCreatedMeetingsList(retrievedMeetings) })

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
                .then(retrievedMeetings => setJoinedMeetingsList(retrievedMeetings))

                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadJoinedMeetings()
    }, [stamp])



    const handleCreatedMeetingsClick = () => {
        loadCreatedMeetings()
        setCreatedMeetingsVisibility(!createdMeetingsVisibility)
        setJoinedMeetingsVisibility(false)
    }


    const handleJoinedMeetingsClick = () => {
        loadJoinedMeetings()
        setJoinedMeetingsVisibility(!joinedMeetingsVisibility)
        setCreatedMeetingsVisibility(false)
    }

    const handleAboutMeClick = () => {
        setAboutVisibility(!aboutMeVisibility)
        setCreatedMeetingsVisibility(false)
        setJoinedMeetingsVisibility(false)
    }


    //COMPO EDIT MEETING PROPS
    const handleMeetingEdited = () => {
        clearView()
        loadCreatedMeetings()
        // setStamp(Date.now())
        setMeeting(null)
    }

    const handleEditMeetingCancelClick = () =>
        clearView()

    const handleEditFormClick = meeting => {
        setView('edit-meeting')
    }

    return <>
        <main className="flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">
            <Header onUserLoggedOut={onLogout} />

            <section>

                <div className="space-between flex items-center grid-cols-4 gap-4 mt-16">

                    <button onClick={() => handleCreatedMeetingsClick()} id="createdmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Created Meetings</button>


                    <button onClick={() => handleJoinedMeetingsClick()} id="joinedmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Joined Meetings</button>

                    <button onClick={() => handleAboutMeClick()} id="aboutme-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">About Me</button>

                </div>

                {createdMeetingsVisibility &&
                    (createdMeetingsList && createdMeetingsList.length > 0 ?
                        <MeetingsList meetings={createdMeetingsList}
                            onEditMeetingClick={handleEditFormClick}
                            onJoinedClick={handleJoinedMeetingsClick} />
                        :
                        <div className="bg-white p-4 rounded">
                            <p className="m-0">You have no meetings created yet</p>
                        </div>
                    )
                }

                {joinedMeetingsVisibility && <MeetingsList
                    onEditMeetingClick={handleEditFormClick}
                    meetings={joinedMeetingsList} />}

                {/* {aboutMeVisibility && (
                    <div className="bg-white p-4 rounded">
                        <p>{user.about}</p>
                    </div>
                )} */}

                {aboutMeVisibility && (
                    <div className="bg-white p-4 rounded">
                        <p>{user && user.about === null ? 'null ABOUT' : JSON.stringify(user)}</p>
                    </div>
                )}

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



