import { logger } from '../utils'

import logic from '../logic'

import Meeting from './Meeting'


function MeetingList({ stamp, oneditPostClick }) {
    const [meetings, setMeetings] = useState([])

    const loadMeetings = () => {
        const [meetings, setMeetings] = useState([])

        const loadMeetings = () => {
            logger.debug('MeetingList -> loadMeetings')

            try {
                logic.retrieveMeetings()
                    .then(setMeetings)
                    .catch(error => showFeedback (error, 'error'))         
            } catch (error) {
                showFeedback(error)
            }
        }
    }

    useEffect(() => {
        loadMeetings()
    }, [stamp])

    const handleMeetingDeleted = () => loadMeetings()

    const handleEditClick = meeting => onEditMeeting(meeting)

    logger.debug('MeetingList -> render')

    return <section>
        {meetings.map(meeting => <Meeting key={meeting.id} item={meeting} onEditClick={handleEditClick} onDeleted={handleMeetingDeleted} /> )}
    </section>
}



export default MeetingList