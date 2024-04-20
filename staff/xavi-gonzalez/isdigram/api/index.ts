//FUNCIONES HECHAS CON EXPRESS JS
import dotenv from 'dotenv'
import mongoose from "mongoose";
import express from "express";
import logic from "./logic/index.ts";
import { errors } from 'com'
import tracer from 'tracer'
import colors from 'colors'
import jwt from 'jsonwebtoken'
import cors from 'cors'

dotenv.config()
// Método utilizado en aplicaciones de Node.js para cargar variables de entorno desde un archivo .env en el proyecto. Este método pertenece a la librería dotenv, que es comúnmente utilizada para manejar configuraciones sensibles, como claves de API o credenciales de bases de datos, de una manera más segura y organizada.
//Cuando llamas a dotenv.config(), la librería buscará un archivo llamado .env en el directorio de tu proyecto y leerá las variables definidas en él, cargándolas en el entorno de ejecución de Node.js.

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

const { ContentError, SystemError, DuplicityError, NotFoundError, CredentialsError, UnauthorizedError } = errors

mongoose.connect(MONGODB_URL)
  .then(() => {
    const api = express();

    const jsonBodyParser = express.json();

    api.use(cors())

    //REGISTER USER CON EXPRESS JS
    api.post('/users', jsonBodyParser, (req, res) => {
      try {
        const { name, birthdate, email, username, password } = req.body

        logic.registerUser(name, birthdate, email, username, password)
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
        if (error instanceof TypeError || error instanceof ContentError) {
          logger.warn(error.message)

          res.status(406).json({ error: error.constructor.name, message: error.message })
        } else {
          logger.warn(error.message)

          res.status(500).json({ error: error.constructor.name, message: error.message })
        }
      }
    })


    //LOGIN USER CON EXPRESS JS
    api.post('/users/auth', jsonBodyParser, (req, res) => {
      try {
        const { username, password } = req.body

        logic.authenticateUser(username, password)
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

          res.status(500).json({ error: error.constructor.name, message: error.message })
        }
      }
    })

    //RETRIEVE USER CON EXPRESS JS
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

          res.status(500).json({ error: error.constructor.name, message: error.message })
        }
      }
    })

    //RETRIEVE POSTS CON EXPRESS JS
    api.get('/posts', (req, res) => {
      try {
        const { authorization } = req.headers

        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.retrievePosts(userId as string)
          .then(posts => res.json(posts))
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


    //CREATE POST CON EXPRESS JS
    api.post('/posts', jsonBodyParser, (req, res) => {
      try {
        const { authorization } = req.headers

        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        const { image, text } = req.body

        logic.createPost(userId as string, image, text)
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


    api.listen(8080, () => logger.info(`API listening on port ${PORT}`));


  })
  .catch(error => logger.error(error))