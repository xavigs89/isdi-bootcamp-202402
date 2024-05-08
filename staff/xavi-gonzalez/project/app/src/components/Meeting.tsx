//@ts-nocheck
import { useState, useEffect } from 'react'
import { logger } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

import { useContext } from '../context'

function Meeting({ item: meeting, onJoinClick, onEditClick, onDeleted, setStamp }) {

    //hacer que foto de meeting desaparezca cuando das a show details
    const [detailsView, setDetailsView] = useState(false)
    const [showImage, setShowImage] = useState(true)

    const toggleImageVisibility = () => {
        setShowImage(!showImage)
    }

    const [view, setView] = useState('close')

    const { showFeedback, showConfirm } = useContext()

    const [joined, setJoined] = useState(false)



    //BOTON JOIN MEETING 

    //     const handleJoinAndUnjoinClick = () => {
    //         const loggedInUserId = logic.getLoggedInUserId()
    //         if (meeting.attendees.includes(loggedInUserId)) {
    //             logic.unjoinMeeting(meeting.id, loggedInUserId)
    //                 .then(() => {
    //                     setJoined(false);
    //                     setStamp(Date.now())
    //                 })
    //                 .catch(error => {
    //                     showFeedback(error)
    //                 })
    //         } else {
    //             logic.joinMeeting(meeting.id, loggedInUserId)
    //                 .then(() => {
    //                     setJoined(true)
    //                     setStamp(Date.now())
    //                 })
    //                 .catch(error => {
    //                     showFeedback(error)
    //                 })
    //         }
    //     }
    // }


    //BOTON JOIN MEETING
    const handleJoinClick = () => {
        const loggedInUserId = logic.getLoggedInUserId()
        // if (!meeting.attendees.includes(loggedInUserId)) {
            logic.joinMeeting(meeting.id, loggedInUserId)
                .then(() => {
                    setJoined(true)
                    setStamp(Date.now())
                })
                .catch(error => {
                    showFeedback(error)
                })
        //}
    }

    // BOTON UNJOIN CLICK
    const handleUnjoinClick = () => {
        const loggedInUserId = logic.getLoggedInUserId()
        // if (meeting.attendees.includes(loggedInUserId)) {
            logic.unjoinMeeting(meeting.id, loggedInUserId)
                .then(() => {
                    setJoined(false)
                    setStamp(Date.now())
                })
                .catch(error => {
                    showFeedback(error)
                })
        //}
    }




    const handleEditClick = meeting => onEditClick(meeting)

    const handleDeleteClick = meetingId => {
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


    return <article className="text-wrap max-w-sm mx-4 overflow-auto flex p-1 border rounded-xl shadow-md bg-white mt-4">

        <div className="col-span-1 pr-4 text-black font-semibold">
            <p className="text-left font-semibold mbp text-xs"><Link to={`user/${meeting.author.name}`}>{meeting.author.name}</Link></p>
            <h2 className="text-2xl text-left font-semibold mb-2">{meeting.title}</h2>
            <p><strong>Address: </strong>{meeting.address}</p>
            <p><strong>Date: </strong>{meeting.date}h </p>


            {view === 'close' &&
                <button onClick={() => { setView('open'); toggleImageVisibility(); }} className="flex w-5 h-5"><img src="../../public/icons/MdiArrowDownCircle.png" alt="" /></button>}

            {view === 'open' &&
                <div className='flex flex-col overflow-auto max-h-[200px]'>
                    <div>
                        <p><strong>Description: </strong>{meeting.description}</p>
                        <p><strong>Location: </strong>{meeting.location}</p>
                    </div>
                    <div>
                        <p><strong>Attendees: </strong></p>
                        <ul className='flex flex-col'>{meeting.attendees.join(', ')}</ul>
                    </div>

                    <button onClick={() => { setView('close'); toggleImageVisibility(); }} className="flex w-5 h-5"><img src="../../public/icons/MdiArrowUpCircle.png" alt="" /> </button>
                </div>
            }

        </div>


        <div className="flex justify-end">
            {showImage && <img className="w-[140px] self-center rounded-xl" src={meeting.image} alt="meeting image" />}

            {logic.getLoggedInUserId() !== meeting.author.id && (
                // <button onClick={handleJoinClick} className="w-5 h-5  ">Join</button>
                <button onClick={joined ? handleUnjoinClick : handleJoinClick} className="w-5 h-5">{joined ? "Unjoin" : "Join"}</button>

                // <button onClick={handleJoinAndUnjoinClick} className="w-5 h-5">{joined ? "Unjoin" : "Join"}</button>


            )}
            {logic.getLoggedInUserId() === meeting.author.id && (
                <div className="flex justify-end">

                    <button onClick={() => handleEditClick(meeting)} className="w-5 h-5  "><img src="../../public/icons/VsEditPage.png" alt="edit" /></button>
                    <button onClick={() => handleDeleteClick(meeting.id)} className="w-5 h-5"><img src="../../public/icons/BiTrash3.png" alt="delete" /></button>
                </div>
            )}
            <div>



            </div>

        </div>

    </article>

}
export default Meeting



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




// {new Date(meeting.date).toLocaleString('es-ES', {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric'
// })}h










//HEBER
{/* <>
                    <button className="mt-2 flex items-center" onClick={() => handleJoinClick(meeting.id)}
                    ><img src="" alt="join" className='w-6 h-6' /><p className='p-1'><strong>Join</strong></p></button>

                    <button className='mt-2 flex items-center' onClick={() => handleUnJoinClick(match.id)}><img src="/public/unJoin-icon.png" alt="Unjoin icon" className='w-6 h-6' /><p className='p-1'><strong>Unjoin</strong></p></button>

                </> */}