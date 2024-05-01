import { useState, useEffect } from 'react'
import { logger } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

import { useContext } from '../context'

function Meeting({ item: meeting, onEditClick, onDeleted }) {

    const [view, setView] = useState('close')

    const { showFeedback, showConfirm } = useContext()

    const [attendees, setAttendees] = useState([])

    // const attendeesNames = meeting.attendees.map((attendee) => attendee.name)

    // setAttendees(attendeesNames)

    // console.log(attendees)

    useEffect(() => {
        const retrieveAttendeesNames = () => {
            let retrievedAttendees = []
            try {
                meeting.attendees.forEach(attendee => {
                    logic.retrieveUser(attendee)
                        .then(user => {
                            retrievedAttendees.push(user.name)
                        })
                        .then(() => setAttendees(retrievedAttendees))
                        .then(() => console.log(attendees))
                        .catch(error)

                })

            } catch (error) {

            }
        }
        retrieveAttendeesNames()
    }, [])


    const handleEditClick = meeting => onEditClick(meeting)

    const handleDeleteClick = meetingId =>
        showConfirm('Do you want to delete meeting?', confirmed => {
            if (confirmed)
                try {
                    logic.removeMeeting(meetingId)
                        .then(() => onDeleted())
                        .catch(error => showFeedback(error, 'error'))
                } catch (error) {
                    showFeedback(error)
                }
        })





    logger.debug('Meeting -> render')
    console.log(meeting)

    return <article className="p-4 border rounded-xl shadow-md bg-white mb-4">

        <h2 className="text-left font-semibold mb-2 text-xs">{meeting.author.name}</h2>

        <h2 className="text-center font-semibold mb-2">{meeting.title}</h2>

        <div className="grid grid-cols-2 gap-4 mb-2">
            <p>Address: {meeting.address}</p>
            <p>Date: {meeting.date}</p>


            <p>Location: {meeting.location}</p>
        </div>


        {/* <p>{meeting.description}</p> */}

        {<img className="center" src={meeting.image} style={{ width: '70vw', height: '30vh' }} />}

        <p className=" text-xs text-right font-semibold mb-2">Attendees: {attendees.toString()} </p>

        {view === 'close' && <button onClick={() => setView('open')}>show details</button>
        }

        {view === 'open' && <div>
            <div>
                <h3>Location</h3>
                <ul>{meeting.attendees.map(attendees => attendees.name)}</ul>
            </div>

            <div>
                <p>Description: {meeting.description}</p>
            </div>
            <button onClick={() => setView('close')}>X</button>
        </div>}




        {logic.getLoggedInUserId() === meeting.author.id && <>

            <button onClick={() => handleEditClick(meeting)} className="w-5 h-5 rounded-full mr-4"><img src="../../public/icons/MaterialSymbolsEditSquareOutlineSharp.png" alt="edit" /></button>
            <button onClick={() => handleDeleteClick(meeting.id)} className="w-5 h-5 rounded-full mr-4"><img src="../../public/icons/TopcoatDelete.png" alt="delete" /></button>
        </>}


    </article>
}

export default Meeting