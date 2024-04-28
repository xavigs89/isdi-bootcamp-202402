import registerUser from './registerUser'
import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import getLoggedInUserId from './getLoggedInUserId'
import isUserLoggedIn from './isUserLoggedIn'
import cleanUpLoggedInUserId from './cleanUpLoggedInUserId'

import createMeeting from './createMeeting'
import retrieveMeetings from './retrieveMeetings'
import removeMeeting from './removeMeeting'
// import modifyMeeting from './modifyMeeting'

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
    removeMeeting,
    // modifyMeeting

    //retrieveProfile
    //editProfile
}

export default logic