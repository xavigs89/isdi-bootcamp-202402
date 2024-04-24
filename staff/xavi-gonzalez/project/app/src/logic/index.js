import registerUser from './registerUser'
import loginUser from './loginUser'
import retrieveUser from './retrieveUser'
import logoutUser from './logoutUser'
import getLoggedInUserId from './getLoggedInUserId'
import isUserLoggedIn from './isUserLoggedIn'
import cleanUpLoggedInUserId from './cleanUpLoggedInUserId'

import createEvent from './createEvent'
// import retrieveEvents from './retrieveEvents'
// import removeEvent from './removeEvent'
// import modifyEvent from './modifyEvent'

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

    createEvent,
    // retrieveEvents,
    // removeEvent,
    // modifyEvent

    //retrieveProfile
    //editProfile
}

export default logic