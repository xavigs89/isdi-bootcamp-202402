//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import Meeting from './Meeting'

import { useState, useEffect } from 'react'

import { useContext } from '../context'

function MeetingsList({ meetings, onEditMeetingClick, onJoinMeetingClick, onUnjoinMeetingClick }) {

    logger.debug('MeetingList -> render')

    const { showFeedback, setStamp, stamp } = useContext()

    const handleJoinClick = meeting => onJoinMeetingClick(meeting)

    const handleUnjoinClick = meeting => onUnjoinMeetingClick(meeting)

    const handleEditClick = meeting => onEditMeetingClick(meeting)

    const handleMeetingDeleted = () => {
        setStamp(Date.now())
    }

    return <ul className="mb-100px">
        {meetings && meetings.map(meeting =>
            <Meeting key={meeting.id} item={meeting} setStamp={setStamp}
                onJoinClick={handleJoinClick}
                unjoinClick={handleUnjoinClick}
                onEditClick={handleEditClick}
                onMeetingDeleted={handleMeetingDeleted}
                onClick={() => handleSelectedMeeting(meeting)}
            // meeting={meeting}
            />)}
    </ul>
}

export default MeetingsList




//ALL MEETINGS, PASADOS Y FUTUROS
// const loadMeetings = () => {
//     logger.debug('MeetingList -> loadMeetings')

//     try {
//         logic.retrieveMeetings()
//             .then(retrievedMeetings => setMeetings(retrievedMeetings))
//             .catch(error => showFeedback(error, 'error'))
//     } catch (error) {
//         showFeedback(error)
//     }
// }



