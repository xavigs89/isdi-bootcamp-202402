import { useState, useEffect } from 'react'
import { logger } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

import { useContext } from '../context'

function Meeting({ item: meeting, onEditClick, onDeleted }) {

    //hacer que foro de meeting desaparezca cuando das a show details
    // const [detailsView, setDetailsView] = useState(false)
    // const [showImage, setShowImage] = useState(true)


    const [view, setView] = useState('close')

    const { showFeedback, showConfirm } = useContext()

    // const [attendees, setAttendees] = useState([])

    // const attendeesNames = meeting.attendees.map((attendee) => attendee.name)

    // setAttendees(attendeesNames)

    // console.log(attendees)



    // useEffect(() => {
    //     const retrieveAttendeesNames = () => {
    //         let retrievedAttendees = []
    //         try {
    //             meeting.attendees.forEach(attendee => {
    //                 logic.retrieveUser(attendee)
    //                     .then(user => {
    //                         retrievedAttendees.push(user.name)
    //                     })
    //                     .then(() => setAttendees(retrievedAttendees))
    //                     .then(() => console.log(attendees))
    //                     .catch(error)

    //             })

    //         } catch (error) {

    //         }
    //     }
    //     retrieveAttendeesNames()
    // }, [])


    //BOTON JOIN MEETING 
    const handleJoinMeeting = () => {
        const loggedInUserId = logic.getLoggedInUserId();
        if (!meeting.attendees.includes(loggedInUserId)) {
            logic.addAttendeeToMeeting(meeting.id, loggedInUserId)
                .then(() => {
                    retrieveAttendees();
                })
                .catch(error => {
                    console.error('Error joining meeting:', error);
                });
        }
    };


    //
    const handleEditClick = meeting => onEditClick(meeting)

    const handleDeleteClick = meetingId => {
  
    console.log("click before confirm")
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
    }





    logger.debug('Meeting -> render')
    console.log(meeting)


    return <article className="flex p-1 pl-4 mx-4 border rounded-xl shadow-md bg-white mt-4">

        <div className="flex-col gap-4 mb-2">
            <p className="text-left font-semibold mbp text-xs">{meeting.author.name}</p>
            <h2 className="text-2xl text-left font-semibold mb-2">{meeting.title}</h2>
            <p><strong>Address: </strong>{meeting.address}</p>
            <p><strong>Date: </strong>{new Date(meeting.date).toLocaleString(navigator.language, {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            }).replace(',', '')}h</p>


            {view === 'close' && (
                <button className="items-center" onClick={() => setView('open')}>show details</button>
            )}

            {view === 'open' && (
                <div>
                    <div>
                        <p><strong>Description: </strong>{meeting.description}</p>
                        <p><strong>Location: </strong>{meeting.location}</p>
                    </div>
                    <div>
                        <p><strong>Attendees: </strong></p>
                        <ul className='flex flex-col'>{meeting.attendees.map(attendee => <li>{attendee.name}</li>)}</ul>
                    </div>

                    <button onClick={() => setView('close')}>X</button>
                </div>
            )}

        </div>
        <div className="flex justify-end">
            <img className="w-[140px] self-center rounded-xl" src={meeting.image} alt="meeting image" />
            <div>
                {logic.getLoggedInUserId() === meeting.author.id && (
                    <div className="flex justify-end">

                        <button onClick={() => handleEditClick(meeting)} className="w-5 h-5  "><img src="../../public/icons/VsEditPage.png" alt="edit" /></button>
                        <button onClick={() => handleDeleteClick(meeting.id)} className="w-5 h-5  "><img src="../../public/icons/TopcoatDelete.png" alt="delete" /></button>
                    </div>
                )}

                {logic.getLoggedInUserId() !== meeting.author.id && (
                    <button onClick={handleJoinMeeting} className="w-5 h-5  ">Join</button>
                )}
            </div>

        </div>








    </article>
}

export default Meeting