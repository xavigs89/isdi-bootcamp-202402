import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import logic from './logic'
import { errors } from 'com'
import tracer from 'tracer'
import colors from 'colors'
import jwt from 'jsonwebtoken'
import cors from 'cors'

dotenv.config()

const { TokenExpiredError } = jwt

const { MONGODB_URL, PORT, JWT_SECRET, JWT_EXP } = process.env

const logger = tracer.colorConsole({
    filters: {
        debug: colors.green,
        info: colors.blue,
        warn: colors.yellow,
        error: colors.red
    }
})

const {
    ContentError,
    SystemError,
    DuplicityError,
    NotFoundError,
    CredentialsError,
    UnauthorizedError
} = errors


mongoose.connect(MONGODB_URL)
    .then(() => {
        const api = express()

        const jsonBodyParser = express.json()

        api.use(cors())


        // REGISTER USER CON EXPRESS
        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, email, password, confirmedPassword } = req.body

                logic.registerUser(name, email, password, confirmedPassword)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)

                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof DuplicityError) {
                            logger.warn(error.message)

                            res.status(409).json({ error: error.constructor.name, message: error.message })
                        }
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError || error instanceof CredentialsError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })


        //AUTHENTICATE USER CON EXPRESS
        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                logic.authenticateUser(email, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXP })

                        res.json(token)
                    })
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)

                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof CredentialsError) {
                            logger.warn(error.message)

                            res.status(401).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof NotFoundError) {
                            logger.warn(error.message)

                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        }
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })


        //RETRIEVE USER CON EXPRESS
        api.get('/users/:targetUserId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { targetUserId } = req.params

                logic.retrieveUser(userId as string, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)

                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof NotFoundError) {
                            logger.warn(error.message)

                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        }
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)

                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })


        // CREATE EVENT CON EXPRESS
        api.post('/events',jsonBodyParser,  (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { title, address, location, date, time, description, image } = req.body

                logic.createEvent(userId as string, title, address, location, date, time, description, image)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)
                            
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof NotFoundError) {
                            logger.warn(error.message)

                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        }
                    })


            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)

                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.listen(PORT, () => logger.info(`API listening on port ${PORT}`))
    })
    .catch(error => logger.error(error))





//RETRIEVE EVENTS CON EXPRESS
// api.get('/posts', (req, res) => {
//     try {
//         const { authorization } = req.headers

//         const token = authorization.slice(7)

//         const { sub: userId } = jwt.verify(token, JWT_SECRET)

//         logic.retrievePosts(userId as string)
//             .then(posts => res.json(posts))
//             .catch(error => {
//                 if (error instanceof SystemError) {
//                     logger.error(error.message)

//                     res.status(500).json({ error: error.constructor.name, message: error.message })
//                 } else if (error instanceof NotFoundError) {
//                     logger.warn(error.message)

//                     res.status(404).json({ error: error.constructor.name, message: error.message })
//                 }
//             })
//     } catch (error) {
//         if (error instanceof TypeError || error instanceof ContentError) {
//             logger.warn(error.message)

//             res.status(406).json({ error: error.constructor.name, message: error.message })
//         } else if (error instanceof TokenExpiredError) {
//             logger.warn(error.message)

//             res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
//         } else {
//             logger.warn(error.message)

//             res.status(500).json({ error: SystemError.name, message: error.message })
//         }
//     }
// })


//CREATE EVENT CON EXPRESS
// api.post('/posts', jsonBodyParser, (req, res) => {
//     try {
//         const { authorization } = req.headers

//         const token = authorization.slice(7)

//         const { sub: userId } = jwt.verify(token, JWT_SECRET)

//         const { image, text } = req.body

//         logic.createPost(userId as string, image, text)
//             .then(() => res.status(201).send())
//             .catch(error => {
//                 if (error instanceof SystemError) {
//                     logger.error(error.message)

//                     res.status(500).json({ error: error.constructor.name, message: error.message })
//                 } else if (error instanceof NotFoundError) {
//                     logger.warn(error.message)

//                     res.status(404).json({ error: error.constructor.name, message: error.message })
//                 }
//             })
//     } catch (error) {
//         if (error instanceof TypeError || error instanceof ContentError) {
//             logger.warn(error.message)

//             res.status(406).json({ error: error.constructor.name, message: error.message })
//         } else if (error instanceof TokenExpiredError) {
//             logger.warn(error.message)

//             res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
//         } else {
//             logger.warn(error.message)

//             res.status(500).json({ error: SystemError.name, message: error.message })
//         }
//     }
// })