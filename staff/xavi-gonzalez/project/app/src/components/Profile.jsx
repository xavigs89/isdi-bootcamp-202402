import logic from '../logic'

import { useParams } from 'react-router-dom'

import Header from './Header'

import { useContext } from '../context'

import MeetingList from '../components/MeetingList'

import { useState, useEffect } from 'react'

function Profile({ onUserLoggedOut }) {

    const [meetings, setMeetings] = useState([])

    const onLogout = () => onUserLoggedOut()

    const { showFeedback } = useContext()

    const { name } = useParams()

    // const loadMeetings = () => {

    //     try {
    //         logic.retrieveJoinedMeetings()
    //             .then(setMeetings)
    //             .catch(error => alert(error))
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    // useEffect(() => {
    //     loadMeetings()
    // }, [])



    const loadMeetings = () => {

        try {
            logic.retrieveCreatedMeetings()
                .then(setMeetings)
                .catch(error => alert(error))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadMeetings()
    }, [])

    // TODO call api to get posts by username


    return <>
        <main className="flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">
            <Header onUserLoggedOut={onLogout} />

            <section>
                {/* <div>
                <h1>Created Meetings:</h1>
            </div> */}


                <div className="flex items-center grid-cols-4 gap-4 mt-16">
                    <button id="benchmarks-button" onClick={() => selectCategory('BenchMarks')} className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Go Back</button>
                    <button id="benchmarks-button" onClick={() => selectCategory('BenchMarks')} className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Created Meetings</button>
                    <button id="normal-wod-button" onClick={() => selectCategory('Normal Wod')} className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Joined Meetings</button>
                    <button id="strength-button" onClick={() => selectCategory('Strength')} className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">About Me</button>

                </div>

                <MeetingList meetings={meetings} />


            </section>




        </main>
    </>
    // return <h1>hello {name}</h1>
}

export default Profile