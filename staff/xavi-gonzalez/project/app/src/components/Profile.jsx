//@ts-nocheck
import logic from '../logic'
import { logger } from '../utils'

import RoundButton from './library/RoundButton'

import { useParams } from 'react-router-dom'
import Header from './Header'
import { useContext } from '../context'
import MeetingsList from './MeetingsList'
import { useState, useEffect } from 'react'


function Profile({ user, stamp, onUserLoggedOut, onCreatedClick, onJoinedClick, onEditMeetingClick }) {
    // const { name } = useParams();

    const onLogout = () => onUserLoggedOut()

   

    const [createdMeetingsList, setCreatedMeetingsList] = useState(false)
    const [joinedMeetingsList, setJoinedMeetingsList] = useState(false)

    const { showFeedback } = useContext()
    // const [stamp, setStamp] = useState(null)

    const [createdMeetingsVisibility, setCreatedMeetingsVisibility] = useState(false)
    const [joinedMeetingsVisibility, setJoinedMeetingsVisibility] = useState(false)
    const [aboutMeVisibility, setAboutVisibility] = useState(false)

    const handleCreatedMeetingsClick = () => {
        setCreatedMeetingsVisibility(!createdMeetingsVisibility)
        setJoinedMeetingsVisibility(false)
    }

    const handleJoinedMeetingsClick = () => {
        setJoinedMeetingsVisibility(!joinedMeetingsVisibility)
        setCreatedMeetingsVisibility(false)
    }

    const handleAboutMeClick = () => {
        setAboutVisibility(!aboutMeVisibility)
        setCreatedMeetingsVisibility(false)
        setJoinedMeetingsVisibility(false)
    }

    //  // EDITAR MEETING
    //  const handleEditMeetingClick = meeting => {
    //     setMeeting(meeting)
    // }
    const handleEditMeetingClick = meeting => onEditMeetingClick(meeting)


    




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


    // TODO call api to get posts by username


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
                        <MeetingsList meetings={createdMeetingsList} onEditMeetingClick={handleEditMeetingClick} stamp={stamp} />
                        :
                        <div className="bg-white p-4 rounded">
                            <p className="m-0">You have no meetings created yet</p>
                        </div>
                    )
                }

                {joinedMeetingsVisibility && <MeetingsList meetings={joinedMeetingsList} />}

                {/* {aboutMeVisibility && (
                    <div className="bg-white p-4 rounded">
                        <p>{user.about}</p>
                    </div>
                )} */}

                {aboutMeVisibility && (
                    <div className="bg-white p-4 rounded">
                        <p>{user && user.about === undefined ? 'undefined ABOUT' : JSON.stringify(user)}</p>
                    </div>
                )}

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



// const loadMeetings = () => {

//     try {
//         logic.retrieveMeetings()
//             .then(setMeetings)
//             .catch(error => alert(error))
//     } catch (error) {
//         showFeedback(error)
//     }
// }

// useEffect(() => {
//     loadMeetings()
// }, [stamp])