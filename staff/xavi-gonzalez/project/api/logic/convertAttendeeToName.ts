import { NotFoundError, SystemError } from 'com/errors'
import { User } from '../data/index.ts'

function convertAttendeeToName(attendeesArray: Array <string | null> ) {
    if (attendeesArray.length === 0 || (attendeesArray.length >0 && attendeesArray[0] === null))
        return []

    const result = attendeesArray.map(id => {
        return User.findById(id)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')
// console.log(user)
            return user.name

            })
        })
        return result
    }

export default convertAttendeeToName
