import { logger } from '../utils'

import { Link } from 'react-router-dom'

import logic from '../logic'

import { useContext } from '../context'

function Meeting ({ item: meeting, onEditClick, onDeleted }) {
    
    const handleDeleteClick = meetingId => 
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
    
    const handleEditClick = meeting => onEditClick(meeting)

    logger.debug('Meeting -> render')

    return <article>
      

        <p>{meeting.title}</p>

        <p>{meeting.address}</p>

        <p>{meeting.location}</p>

        <p>{meeting.date}</p>

        <p>{meeting.time}</p>

        <p>{meeting.description}</p>

        {<img src={meeting.image} />}

       

        { logic.getLoggedInUserId() === meeting.author.id && <>
            <button onClick={() => handleEditClick(surgery)}>📝</button>
            <button onClick={() => handleDeleteClick(surgery.id)}>🗑️</button>
        </>}


    </article>
}

export default Meeting