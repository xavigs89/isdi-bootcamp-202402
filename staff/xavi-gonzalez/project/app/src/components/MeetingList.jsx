import { logger } from '../utils'

import logic from '../logic'

import { useEffect, useState } from 'react'

import Meeting from './Meeting'

import { useContext } from '../context'

function MeetingList({ stamp, onEditMeetingClick }) {
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

    logger.debug('MeetingList -> render')

    return <section className="">
        {meetings.map(meeting =>
            <Meeting key={meeting.id} item={meeting} onEditClick={handleEditClick} onDeleted={handleMeetingDeleted} onClick={() => handleSelectedMeeting(meeting)} />)}
    </section>
}




export default MeetingList