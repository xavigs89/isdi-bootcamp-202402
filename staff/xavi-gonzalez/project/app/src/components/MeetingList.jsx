import { logger } from '../utils'

import logic from '../logic'

import { useEffect, useState } from 'react'

import Meeting from './Meeting'

import { useContext } from '../context'

function MeetingList({ stamp, onEditMeetingClick, onJoinMeetingClick }) {
    const [meetings, setMeetings] = useState([])

    const { showFeedback } = useContext()


    const loadMeetings = () => {
        logger.debug('MeetingList -> loadMeetings')

        try {
            logic.retrieveMeetings()
                .then(retrievedMeetings => setMeetings(retrievedMeetings))
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    useEffect(() => {
        loadMeetings()
    }, [stamp])


    const handleMeetingDeleted = () => loadMeetings()

    const handleEditClick = meeting => onEditMeetingClick(meeting)

    const handleJoinClick = meeting => onJoinMeetingClick(meeting)

    logger.debug('MeetingList -> render')

    return <ul className="mb-100px">
        {meetings.map(meeting =>
            <Meeting key={meeting.id} item={meeting} 
            onJoinClick={handleJoinClick}
            onEditClick={handleEditClick} 
            onDeleted={handleMeetingDeleted} 
            onClick={() => handleSelectedMeeting(meeting)} />)}
    </ul>
}




export default MeetingList