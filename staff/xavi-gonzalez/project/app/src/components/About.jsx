//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import Meeting from './Meeting'

import { useState, useEffect } from 'react'

import { useContext } from '../context'

function About({ users, onEditAboutClick }) {

    logger.debug('MeetingList -> render')

    const { showFeedback, setStamp, stamp } = useContext()

    const handleAboutClick = user => onEditAboutClick(user)

    const handleAboutEdited = () => {
        setStamp(Date.now())
    }

    return <ul className="mb-100px">
        {users && users.map(user =>
            <Profile key={user.id} item={user} setStamp={setStamp}
                onEditClick={handleEditClick}
                // onMeetingDeleted={handleMeetingDeleted}
                // onClick={() => handleSelectedMeeting(meeting)}
            // meeting={meeting}
            />)}
    </ul>
}

export default About