import { logger } from '../utils'

import logic from '../logic'

import { useEffect, useState } from 'react'

import Meeting from './Meeting'

import { useContext } from '../context'

function MeetingList({ stamp, setStamp, onEditMeetingClick, onJoinMeetingClick }) {
    const [meetings, setMeetings] = useState([])
    const { showFeedback } = useContext()

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


    //UPCOMING MEETINGS, NO SE MUESTRAN MEETINGS PASADOS
    const loadMeetings = () => {
        logger.debug('MeetingList -> loadMeetings')

        try {
            logic.retrieveMeetings()
                .then(retrievedMeetings => {
                    const upcomingMeetings = retrievedMeetings.filter(meeting => new Date(meeting.date) > new Date())
                    setMeetings(upcomingMeetings)
                })
                .catch(error => showFeedback(error, 'error'));
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
            <Meeting key={meeting.id} item={meeting} setStamp={setStamp}
                onJoinClick={handleJoinClick}
                onEditClick={handleEditClick}
                // onCreateCick={handleCreatedClick}
                // onJoinedClick={handleJoinedClick}
                onDeleted={handleMeetingDeleted}
                onClick={() => handleSelectedMeeting(meeting)} />)}
    </ul>
}




export default MeetingList