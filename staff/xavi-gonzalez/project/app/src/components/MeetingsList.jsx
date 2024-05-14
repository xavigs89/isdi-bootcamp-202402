//@ts-nocheck
import { logger } from '../utils'

import { useState, useEffect } from 'react'
import { useContext } from '../context'

import Meeting from './Meeting'

function MeetingsList({ meetings, onEditMeetingClick, onJoinMeetingClick, onUnjoinMeetingClick, onReviewClick }) {

    logger.debug('MeetingList -> render')

    const { showFeedback, setStamp, stamp } = useContext()

    const handleJoinClick = meeting => onJoinMeetingClick(meeting)

    const handleUnjoinClick = meeting => onUnjoinMeetingClick(meeting)

    const handleEditClick = meeting => onEditMeetingClick(meeting)

    const handleMeetingDeleted = () => {
        setStamp(Date.now())
    }

    const handleReviewClick = meeting => onReviewClick(meeting)

    return <div>
        <ul className="mb-100px">
            {meetings && meetings.map(meeting =>
                <Meeting
                    key={meeting.id}
                    meeting={meeting}
                    stamp={stamp}
                    setStamp={setStamp}
                    showFeedback={showFeedback}
                    onJoinClick={handleJoinClick}
                    unjoinClick={handleUnjoinClick}
                    onEditClick={handleEditClick}
                    onMeetingDeleted={handleMeetingDeleted}
                    onReviewClick={handleReviewClick}
                    onClick={() => handleSelectedMeeting(meeting)}
                />)}
        </ul>
    </div>
}

export default MeetingsList


