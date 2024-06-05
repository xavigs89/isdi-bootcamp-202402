import { useState, useEffect } from 'react'
import { logger } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import { useContext } from '../context'
import getLoggedInUserId from '../logic/getLoggedInUserId'

import moment from 'moment'
import ReviewsList from './ReviewsList'

function Meeting({ meeting, onJoinClick, unjoinClick, onEditClick, onMeetingDeleted, onReviewClick }) {

    const [userReviewed, setUserReviewed] = useState(false)

    const { showFeedback, showConfirm, setStamp } = useContext()

    const [view, setView] = useState('close')
    const [joined, setJoined] = useState(false)
    const [reviews, setReviews] = useState([])

    const [showImage, setShowImage] = useState(true)

    const toggleImageVisibility = () => {
        setShowImage(!showImage)
    }

    const currentDate = moment()
    const meetingDate = moment(meeting.date)
    const isMeetingDone = meetingDate.isBefore(currentDate)

    const latitude = meeting.location.latitude
    const longitude = meeting.location.longitude


    const handleJoinClick = meeting => {
        try {
            logic.joinMeeting(meeting)
                .then(() => onJoinClick())
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

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

    const handleReviewClick = meeting => onReviewClick(meeting)


    const loadReviews = (meeting) => {
        logic.retrieveReviewsByMeetingId(meeting.id)
            .then((reviews) => {
                setReviews(reviews)
            })
            .catch(error => {
                // Show feedback for any error
                showFeedback(error, 'error');
            })
    }
    useEffect(() => {
        const attendeeJoined = meeting.attendees.some(attendees => attendees.id === getLoggedInUserId().userId)
        setJoined(attendeeJoined)
    }, [meeting])

    logger.debug('Meeting -> render')


    const mapUrl = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14261.461455979836!2d${meeting.location.longitude}!3d${meeting.location.latitude}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1715701763805!5m2!1ses!2ses`

    // useEffect(() => {
    //     const map = L.map(`map-${meeting.id}`, {
    //         attributionControl: false,
    //         zoomControl: false,
    //     }).setView([latitude, longitude], 13)

    //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


    //     L.marker([latitude, longitude])
    //         .addTo(map)
    //         .bindPopup(`<b style="font-size: 12px">${meeting.title}</b>`)
    //         .openPopup();
    // }, [latitude, longitude, meeting.id, meeting.title, meeting.address])


    return <article className="max-w-sm mx-auto overflow-hidden flex p-1 border rounded-xl shadow-md bg-white mt-4">

        <div className="flex flex-col justify-between h-full">
            <div className="p-2">
                <Link to={`user/${meeting.author.name}`} className="text-s font-semibold mb-1 block">{meeting.author.name}</Link></div>

            <h2 className="text-2xl font-semibold mb-2 pl-2">{meeting.title}</h2>

            <p className="pl-2"><strong>Address: </strong>{meeting.address}</p>

            <p className="pl-2">{moment(meeting.date).format('Do MMMM YYYY, h:mm a')}</p>


            {view === 'close' &&
                <button onClick={() => { setView('open'); toggleImageVisibility(); }} className="flex justify-center pl-2 mt-6 w-8 h-8"><img src="../../public/icons/MdiArrowDownCircle.png" alt="" /></button>}

            {view === 'open' &&
                <div className='p-2'>
                    <div>
                        <p><strong>Description: </strong>{meeting.description}</p>

                        <p className="pb-1 pt-2"><strong>Location: </strong></p>
                        {/* <div id={`map-${meeting.id}`} style={{ height: '150px', width: '150px', border: '1px solid', zIndex: '0' }}></div> */}

                        <iframe src={mapUrl} width="355" height="200" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div>
                        <p className="pt-2"><strong>Attendees: </strong></p>
                        <ul>{meeting.attendees.join(', ')}</ul>
                    </div>


                    <div className="flex jutify-center mb-4 ">
                        <button className="mt-2 font-bold mr-4" onClick={() => handleJoinClick(meeting.id)}>
                            Join
                        </button>
                        <button className="mt-2 font-bold" onClick={() => handleUnjoinClick(meeting.id)}>
                            Unjoin
                        </button>
                    </div>

                    {isMeetingDone && (
                        <div className="flex justify-center ">
                            <button onClick={() => handleReviewClick(meeting)} className="bg-[#249D8C] text-white font-bold py-2 px-4 rounded mr-4">
                                Leave a Review
                            </button>
                            <button onClick={() => loadReviews(meeting)} className="bg-[#249D8C] text-white font-bold py-2 px-4 rounded">
                                Show Reviews
                            </button>
                        </div>
                    )}

                    {reviews.length > 0 && <ReviewsList reviews={reviews}
                    />}

                    <div className="flex justify-center">
                        <button onClick={() => { setView('close'); toggleImageVisibility(); }} className="p-2 w-10 h-10"><img src="../../public/icons/MdiArrowUpCircle.png" alt="" /> </button>
                    </div>
                </div>
            }
        </div>

        <div >
            {showImage && <img className="w-[206px] h-[160px] flex object-cover justify-end px-2 pt-4" src={meeting.image} alt="meeting image" />}

            {logic.getLoggedInUserId().userId === meeting.author.id && (
                <div className="flex justify-end flex-row items-end mt-6 pr-2">
                    <button onClick={() => handleEditClick(meeting)} className="w-5 h-5  "><img src="../../public/icons/VsEditPage.png" alt="edit" /></button>
                    <button onClick={() => handleDeleteClick(meeting.id)} className="ml-2 w-5 h-5"><img src="../../public/icons/BiTrash3.png" alt="delete" /></button>
                </div>
            )}
        </div>

    </article>
}
export default Meeting