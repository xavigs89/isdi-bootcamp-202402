//@ts-nocheck
import { useState, useEffect } from 'react'
import { logger } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

import { useContext } from '../context'
import getLoggedInUserId from '../logic/getLoggedInUserId'

import moment from 'moment'

function Meeting({ item: meeting, onJoinClick, unjoinClick, onEditClick, onMeetingDeleted, onReviewClick }) {


    const { showFeedback, showConfirm, setStamp } = useContext()

    const [view, setView] = useState('close')
    const [joined, setJoined] = useState(false)

    //hacer que foto de meeting desaparezca cuando das a show details
    // const [detailsView, setDetailsView] = useState(false)
    const [showImage, setShowImage] = useState(true)

    const toggleImageVisibility = () => {
        setShowImage(!showImage)
    }
    const currentDate = moment()
    const meetingDate = moment(meeting.date)
    const isPastMeeting = meetingDate.isBefore(currentDate)


    //BOTON JOIN MEETING
    const handleJoinClick = meeting => {
        try {
            logic.joinMeeting(meeting)
                .then(() => onJoinClick())
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    //BOTON UNJOIN MEETING
    const handleUnjoinClick = meeting => {
        try {
            logic.unjoinMeeting(meeting)
                .then(() => {
                    setStamp(Date.now)
                    unjoinClick()
                })
        } catch (error) {
            showFeedback(error)
        }
    }


    const handleEditClick = meeting => onEditClick(meeting)

    const handleDeleteClick = meetingId => {
        showConfirm('Do you want to delete meeting?', confirmed => {
            if (confirmed)
                try {
                    logic.removeMeeting(meetingId)
                        .then(() => {
                            setStamp(Date.now())
                            onMeetingDeleted()
                        })
                        .catch(error => showFeedback(error, 'error'))
                } catch (error) {
                    showFeedback(error)
                }
        })
    }


    //REVIEW
    const handleReviewClick = meeting => onReviewClick(meeting)



    useEffect(() => {
        const attendeeJoined = meeting.attendees.some(attendees => attendees.id === getLoggedInUserId().userId)
        setJoined(attendeeJoined)
    }, [meeting])

    logger.debug('Meeting -> render')




    return <article className="text-wrap max-w-sm mx-4 overflow-auto flex p-1 border rounded-xl shadow-md bg-white mt-4">

        <div className="col-span-1 pr-4 text-black font-semibold">
            <p className="text-left font-semibold mbp text-xs"><Link to={`user/${meeting.author.name}`}>{meeting.author.name}</Link></p>
            <h2 className="text-2xl text-left font-semibold mb-2">{meeting.title}</h2>
            <p><strong>Address: </strong>{meeting.address}</p>
            <p>{moment(meeting.date).format('Do MMMM YYYY, h:mm a')}</p>
            {isPastMeeting && (
                <button onClick={() => handleReviewClick(meeting)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Review</button>
            )}

            {view === 'close' &&
                <button onClick={() => { setView('open'); toggleImageVisibility(); }} className="flex w-5 h-5"><img src="../../public/icons/MdiArrowDownCircle.png" alt="" /></button>}

            {view === 'open' &&
                <div className='flex flex-col overflow-auto max-h-[200px]'>
                    <div>
                        <p><strong>Description: </strong>{meeting.description}</p>
                        <p><strong>Location: </strong>{meeting.location}</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11976.556123909626!2d2.1548569!3d41.371064000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1715240977554!5m2!1ses!2ses" width="300" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div>
                        <p><strong>Attendees: </strong></p>
                        <ul className='flex flex-col'>{meeting.attendees.join(', ')}</ul>
                    </div>

                    <div className="flex space-x-4">
                        <button className="mt-2 flex items-center" onClick={() => handleJoinClick(meeting.id)}>
                            <p className="p-1"><strong>Join</strong></p>
                        </button>
                        <button className="mt-2 flex items-center" onClick={() => handleUnjoinClick(meeting.id)}>
                            <p className="p-1"><strong>Unjoin</strong></p>
                        </button>
                    </div>

                    <button onClick={() => { setView('close'); toggleImageVisibility(); }} className="flex w-5 h-5"><img src="../../public/icons/MdiArrowUpCircle.png" alt="" /> </button>
                </div>
            }

        </div>


        <div className="flex justify-end">
            {showImage && <img className="w-[140px] self-center rounded-xl" src={meeting.image} alt="meeting image" />}

            {logic.getLoggedInUserId().userId === meeting.author.id && (
                <div className="flex justify-end">
                    <button onClick={() => handleEditClick(meeting)} className="w-5 h-5  "><img src="../../public/icons/VsEditPage.png" alt="edit" /></button>
                    <button onClick={() => handleDeleteClick(meeting.id)} className="w-5 h-5"><img src="../../public/icons/BiTrash3.png" alt="delete" /></button>
                </div>
            )}

            {/* {logic.getLoggedInUserId().userId && logic.isUserJoined() && logic.isMeetingDone() && (
                <button onClick={handleReviewClick(meeting)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    Review
                </button>
            )} */}

            <div>



            </div>

        </div>

    </article>

}
export default Meeting


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

// useEffect(() => {
//     if (user)
//         try {
//     logic.isUserJoined(meeting)
//     .then(result => {
//         if (result)
//             setJoined(true)
//     })
// } catch(error) {
//     showFeedback(error)
// }
// }, [meeting])