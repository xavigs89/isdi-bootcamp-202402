//@ts-nocheck
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import logic from '../logic'
import { logger } from '../utils'
import Header from './Header'

import { useContext } from '../context'
import { useNavigate } from 'react-router-dom'

function OtherUserProfile() {

        // const { showFeedback } = useContext()
        const { userId } = useParams()
        const [user, setUser] = useState(null)
        const [createdMeetings, setCreatedMeetings] = useState(false)
        const [about, setAbout] = useState(false)
        const [view, setView] = useState('close')


        const handleLoggedOut = () => {
                navigate("/login")
            }


        const clearView = () => setView('close')

        const toogleViewCreated = () => {
                setView(view === 'open-created' ? 'close' : 'open-created')
        }

        const toogleViewAbout = () => {
                setView(view === 'open-about' ? 'close' : 'open-about')
        }

        useEffect(() => {
                // Llama a la función de la API para recuperar la información del usuario
                try {
                        logic.retrieveUser(userId)

                                .then(setUser)
                                .catch(error => showFeedback(error, 'error retrieving user'))
                } catch (error) {
                        showFeedback(error)
                }

                // Llama a la función de la API para recuperar las reuniones creadas por el usuario
                try {
                        logic.retrieveCreatedMeetings(userId)
                                .then(setCreatedMeetings)
                                .catch(error => showFeedback(error, 'error retrieving created meetings'))
                } catch (error) {
                        showFeedback(error)
                }
        }, [userId])


        return (
                <main className="flex flex-col items-center min-h-screen px-[1vw] bg-[#249D8C]">
                    <Header onUserLoggedOut={handleLoggedOut} />
        
                    <div className="rounded-xl space-between flex items-center grid-cols-4 gap-4">
                        <button onClick={toogleViewCreated} id="createdmeetings-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Created Meetings</button>
        
                        <button onClick={toogleViewAbout} id="about-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">About</button>
                    </div>
        
                    {view === 'open-created' && <MeetingsList meetings={createdMeetings}
                        onJoinMeetingClick={handleJoinedMeetingsClick}
                        onUnjoinMeetingClick={handleUnJoinMeetingClick} />}
        
                    {view === 'open-about' && user & (
                        <div className="mt-4 p-4 bg-white rounded-xl text-center text-wrap">
                            <p className="mt-2"><strong>Full name:</strong> {userId.name}</p>
                            <p className="mt-2"><strong>Contact:</strong> {userId.email}</p>
                            <p className="mt-2">{user && user.about !== null ? userId.about : "user has no updated About yet"}</p>
                        </div>
                    )}
                </main>
            )

}

export default OtherUserProfile