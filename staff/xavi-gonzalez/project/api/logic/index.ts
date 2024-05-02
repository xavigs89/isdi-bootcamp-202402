import registerUser from './registerUser.ts'
import authenticateUser from './authenticateUser.ts'
import retrieveUser from './retrieveUser.ts'

import createMeeting from './createMeeting.ts'
import retrieveMeetings from './retrieveMeetings.ts'
import retrieveCreatedMeetings from './retrieveCreatedMeetings.ts'
import modifyMeeting from './modifyMeeting.ts'
import removeMeeting from './removeMeeting.ts'

//import modifyProfile from './modifyProfile.ts'


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,

    createMeeting,
    retrieveMeetings,
    retrieveCreatedMeetings,

    modifyMeeting,
    removeMeeting,

    //modifyProfile
}

export default logic