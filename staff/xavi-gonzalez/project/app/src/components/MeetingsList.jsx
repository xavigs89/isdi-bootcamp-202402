//@ts-nocheck
import { logger } from '../utils'

import logic from '../logic'

import { useEffect, useState } from 'react'

import Meeting from './Meeting'

import { useContext } from '../context'

function MeetingsList({ stamp, setStamp, onEditMeetingClick, onJoinMeetingClick, meetings }) {
    const [meetings2, setMeetings2] = ([])

    
    const { showFeedback } = useContext()

   
    const handleMeetingDeleted = () => loadMeetings()

    const handleEditClick = meeting => onEditMeetingClick(meeting)

    const handleJoinClick = meeting => onJoinMeetingClick(meeting)

    logger.debug('MeetingList -> render')

    //ALL MEETINGS, PASADOS Y FUTUROS
    const loadMeetings = () => {
        logger.debug('MeetingList -> loadMeetings')

        try {
            logic.retrieveMeetings()
                .then(setMeetings2)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadMeetings()
    }, [stamp])


    return <ul className="mb-100px">
        {meetings && meetings.map(meeting =>
            <Meeting key={meeting.id} item={meeting} 
                onJoinClick={handleJoinClick}
                onEditClick={handleEditClick}
                onDeleted={handleMeetingDeleted}
                onClick={() => handleSelectedMeeting(meeting)} />)}
    </ul>
}

//setStamp={setStamp}
export default MeetingsList


 