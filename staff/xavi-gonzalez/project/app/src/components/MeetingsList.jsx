//@ts-nocheck
import { logger } from '../utils'
import Meeting from './Meeting'

import { useState, useEffect } from 'react'

import { useContext } from '../context'

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
        {/* <div>
            <h1 className='text-black text-center font-bold mt-20'>Upcoming Meetings</h1>
        </div> */}

        <ul className="mb-100px">
            {meetings && meetings.map(meeting =>
                <Meeting key={meeting.id} item={meeting} setStamp={setStamp}
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


