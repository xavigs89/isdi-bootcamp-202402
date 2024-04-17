//FUNCIONES HECHAS CON EXPRESS JS
import mongoose from "mongoose";
import express from "express";
import logic from "./logic/index.ts";
import { errors } from 'com'
import tracer from 'tracer'
import colors from 'colors'
import jwt from 'jsonwebtoken'


const logger = tracer.colorConsole({
  filters: {
    debug: colors.green,
    info: colors.blue,
    warn: colors.yellow,
    error: colors.red
  }
})

const { ContentError, SystemError, DuplicityError, NotFoundError, CredentialsError } = errors

mongoose.connect('mongodb://localhost:27017/isdigram')
  .then(() => {
    const api = express();

    const jsonBodyParser = express.json();

    api.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*"); //Permite el acceso cruzado a recursos de un dominio diferente en el navegador del cliente.
      res.setHeader("Access-Control-Allow-Methods", "*"); //indica qué métodos HTTP son permitidos desde el origen solicitante. Este encabezado especifica una lista separada por comas de los métodos HTTP permitidos.
      res.setHeader("Access-Control-Allow-Headers", "*");
      //permite a un servidor especificar qué encabezados HTTP personalizados pueden ser enviados en una solicitud desde un origen cruzado.

      next();
    });


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
            const token = jwt.sign({ sub: userId }, 'Es un secreto, de tu mirada y la mía')

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

        const { sub: userId } = jwt.verify(token, 'Es un secreto, de tu mirada y la mía')

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

        const { sub: userId } = jwt.verify(token, 'Es un secreto, de tu mirada y la mía')

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
        } else {
          logger.warn(error.message)

          res.status(500).json({ error: error.constructor.name, message: error.message })
        }
      }
    })

    
    //CREATE POST CON EXPRESS JS
    api.post('/posts', jsonBodyParser, (req, res) => {
      try {
        const { authorization } = req.headers

        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, 'Es un secreto, de tu mirada y la mía')

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
        } else {
          logger.warn(error.message)

          res.status(500).json({ error: error.constructor.name, message: error.message })

        }

      }
    })



    api.listen(8080, () => logger.info("API listening on port 8080"));

  })
  .catch(error => logger.error(error))