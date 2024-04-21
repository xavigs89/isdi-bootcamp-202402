import { validate, errors } from 'com'

import { UserType, User } from '../data/index.ts'

const { DuplicityError, SystemError, CredentialsError } = errors

function registerUser(name: string, birthdate: string, email: string, username: string, password: string, confirmedPassword: string): Promise<void> {
    validate.text(name, 'name')
    validate.date(birthdate, 'birthdate')
    validate.email(email)
    validate.text(username, 'username', true)
    validate.password(password)

    if (password !== confirmedPassword) throw new CredentialsError('passwords do not match')

    return User.findOne({ $or: [{ email }, { username }] })
        .catch(error => { throw new SystemError(error.message) })
        .then((user: UserType) => {
            if (user)
                throw new DuplicityError('user already exists')

            user = {
                name: name.trim(),
                birthdate: new Date(birthdate),
                email: email,
                username: username,
                password: password
            }

            return User.create(user)
                .catch(error => { throw new SystemError(error.message) })
                .then(user => { })
        })

}

export default registerUser