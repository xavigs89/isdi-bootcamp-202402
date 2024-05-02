import { logger } from '../utils'

import logic from '../logic'

import { useEffect, useState } from 'react'

import Meeting from './Meeting'

function MeetingList({ stamp }) {
    const [meetings, setMeetings] = useState([])

    

    useEffect(() => {
        const loadMeetings = () => {
            try {
                logic.retrieveMeetings()
                    .then (retrievedMeetings => setMeetings(retrievedMeetings))
                    .catch(error => showFeedback(error, 'error'))
            } catch (error) {
                showFeedback(error)
            }
        }


        loadMeetings()
    }, [stamp])
    /*const [meetings, setMeetings] = useState([])

    const loadMeetings = () => {
        const [meetings, setMeetings] = useState([])

            logger.debug('MeetingList -> loadMeetings')

            try {
                logic.retrieveMeetings()
                    .then(setMeetings)
                    .catch(error => showFeedback(error, 'error'))
            } catch (error) {
                showFeedback(error)
            }
        }
    }

    useEffect(() => {
        loadMeetings()
    }, [stamp])

    // const handleMeetingDeleted = () => loadMeetings()

    // const handleEditClick = meeting => onEditMeeting(meeting)

    logger.debug('MeetingList -> render')

    console.log(meetings)*/

    return <section className="">
       {meetings.map(meeting => <Meeting key={meeting.id} item={meeting}/>)}
    </section>
}




export default MeetingList