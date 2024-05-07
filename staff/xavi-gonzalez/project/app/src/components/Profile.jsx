import logic from '../logic'

import RoundButton from './library/RoundButton'

import { useParams } from 'react-router-dom'

import Header from './Header'

import { useContext } from '../context'

import JoinedMeetingsList from '../components/JoinedMeetingsList'
import CreatedMeetingsList from './CreatedMeetingsList'

import { useState, useEffect } from 'react'


function Profile({ item: meeting, stamp, onUserLoggedOut, onCreatedClick, onJoinedClick }) {

    const onLogout = () => onUserLoggedOut()
    const { showFeedback } = useContext()

    const [createdMeetings, setCreatedMeetings] = useState(false)
    const [joinedMeetings, setJoinedMeetings] = useState(false)


    const handleCreatedMeetings = () => {
        setCreatedMeetings(true)
    }

    const handleJoinedMeetings = () => {
        setJoinedMeetings(true)
    }

    // const [stamp, setStamp] = useState(null)


    const [meetings, setMeetings] = useState([false])


    // const { name } = useParams()

    const loadMeetings = () => {

        try {
            logic.retrieveMeetings()
                .then(setMeetings)
                .catch(error => alert(error))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadMeetings()
    }, [stamp])

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

    // TODO call api to get posts by username


    return <>
        <main className="flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">
            <Header onUserLoggedOut={onLogout} />

            <section>


                <div className="space-between flex items-center grid-cols-4 gap-4 mt-16">

                    <button onClick={() => handleCreatedMeetings()} id="createdmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Created Meetings</button>


                    <button onClick={() => handleJoinedMeetings()} id="joinedmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Joined Meetings</button>

                    <button id="about-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">About Me</button>

                </div>

                {createdMeetings && <CreatedMeetingsList />}

                {joinedMeetings && <JoinedMeetingsList />}









            </section>




        </main>
    </>
    // return <h1>hello {name}</h1>

    {/* <MeetingList meetings={meetings} /> */ }
}

export default Profile