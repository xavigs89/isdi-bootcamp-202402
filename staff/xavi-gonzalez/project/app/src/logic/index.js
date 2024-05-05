import registerUser from './registerUser'
import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import getLoggedInUserId from './getLoggedInUserId'
import isUserLoggedIn from './isUserLoggedIn'
import cleanUpLoggedInUserId from './cleanUpLoggedInUserId'

import createMeeting from './createMeeting'
import retrieveMeetings from './retrieveMeetings'
import retrieveCreatedMeetings from './retrieveCreatedMeetings'
import removeMeeting from './removeMeeting'
import editMeeting from './editMeeting'
import joinMeeting from './joinMeeting'

// import retrieveProfile from 'retrieveProfile'
// import editProfile from 'editProfile'


const logic = {
    registerUser,
    loginUser,
    retrieveUser,
    logoutUser,
    getLoggedInUserId,
    isUserLoggedIn,
    cleanUpLoggedInUserId,

    createMeeting,
    retrieveMeetings,
    retrieveCreatedMeetings,
    removeMeeting,
    editMeeting,
    joinMeeting,

    //retrieveProfile
    //editProfile
}

export default logic