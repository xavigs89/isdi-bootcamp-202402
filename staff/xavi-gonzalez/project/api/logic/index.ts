import registerUser from './registerUser.ts'
import authenticateUser from './authenticateUser.ts'
import retrieveUser from './retrieveUser.ts'

import createMeeting from './createMeeting.ts'
import retrieveMeetings from './retrieveMeetings.ts'

import retrieveCreatedMeetings from './retrieveCreatedMeetings.ts'
import retrieveJoinedMeetings from './retrieveJoinedMeetings.ts'
import editMeeting from './editMeeting.ts'
import removeMeeting from './removeMeeting.ts'

import joinMeeting from './joinMeeting.ts'
import unjoinMeeting from './unjoinMeeting.ts'

import retrieveAbout from './retrieveAbout.ts'

import createReview from './createReview.ts'




//import modifyProfile from './modifyProfile.ts'


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,

    createMeeting,
    retrieveMeetings,

    retrieveCreatedMeetings,
    retrieveJoinedMeetings,
    editMeeting,
    removeMeeting,


    joinMeeting,
    unjoinMeeting,

    retrieveAbout,

    createReview,

    //modifyProfile
}

export default logic