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
import retrieveJoinedMeetings from './retrieveJoinedMeetings'
import removeMeeting from './removeMeeting'
import editMeeting from './editMeeting'
import joinMeeting from './joinMeeting'
import unjoinMeeting from './unjoinMeeting'
import isUserJoined from './isUserJoined'

import editAbout from './editAbout'

import createReview from './createReview'



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
    retrieveJoinedMeetings,
    removeMeeting,
    editMeeting,
    joinMeeting,
    unjoinMeeting,
    isUserJoined,


    editAbout,
    createReview,
}

export default logic