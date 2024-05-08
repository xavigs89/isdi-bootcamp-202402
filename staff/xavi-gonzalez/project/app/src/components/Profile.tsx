//@ts-nocheck
import logic from '../logic'
import { logger } from '../utils'

import RoundButton from './library/RoundButton'

import { useParams } from 'react-router-dom'

import Header from './Header'

import { useContext } from '../context'

import MeetingsList from './MeetingsList'
// import CreatedMeetingsList from './CreatedMeetingsList'

import { useState, useEffect } from 'react'


function Profile({ item: meeting, stamp, onUserLoggedOut, onCreatedClick, onJoinedClick, onEditMeetingClick }) {
    const { name } = useParams();

    const onLogout = () => onUserLoggedOut()

    const [createdMeetingsList, setCreatedMeetingsList] = useState(false)
    const [joinedMeetingsList, setJoinedMeetingsList] = useState(false)

    const { showFeedback } = useContext()
    // const [stamp, setStamp] = useState(null)

    const [createdMeetingsVisibility, setCreatedMeetingsVisibility] = useState(false)
    const [joinedMeetingsVisibility, setJoinedMeetingsVisibility] = useState(false)
    const [aboutVisibility, setAboutVisibility] = useState(false)

    const handleCreatedMeetingsClick = () => {
        setCreatedMeetingsVisibility(!createdMeetingsVisibility)
        setJoinedMeetingsVisibility(false)
    }

    const handleJoinedMeetingsClick = () => {
        setJoinedMeetingsVisibility(!joinedMeetingsVisibility)
        setCreatedMeetingsVisibility(false)
    }


    const [meetings, setMeetings] = useState([false])




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



    //ALL MEETINGS, PASADOS Y FUTUROS
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


       //ALL MEETINGS, PASADOS Y FUTUROS
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


    // TODO call api to get posts by username


    return <>
        <main className="flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">
            <Header onUserLoggedOut={onLogout} />

            <section>

                <div className="space-between flex items-center grid-cols-4 gap-4 mt-16">

                    <button onClick={() => handleCreatedMeetingsClick()} id="createdmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Created Meetings</button>


                    <button onClick={() => handleJoinedMeetingsClick()} id="joinedmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Joined Meetings</button>

                    <button id="about-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">About Me</button>

                </div>

                {createdMeetingsVisibility && <MeetingsList meetings= {createdMeetingsList} onEditMeetingClick={onEditMeetingClick}/>}

                {joinedMeetingsVisibility && <MeetingsList meetings={joinedMeetingsList} />}

                {/* {aboutVisibility && <About />} */}

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