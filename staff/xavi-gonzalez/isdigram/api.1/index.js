import express from "express";
import logic from "./logic/index.mjs";

import fs from "fs"

const api = express();

const jsonBodyParser = express.json();


//REGISTER USER

api.post("/users", jsonBodyParser, (req, res) => {
    try {
        const { name, birthdate, email, username, password } = req.body

        logic.registerUser(name, birthdate, email, username, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(201).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
});

// TODO login user -> POST /users/auth
//LOGIN USER
api.post("/users/auth", jsonBodyParser, (req, res) => {
    try {
        const { username, password } = req.body

        logic.loginUser(username, password, error => {
            if (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.status(202).send()
        })
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})

// TODO retrieve user -> GET /users
//RETRIEVE USER
api.get("/users/:userId", jsonBodyParser, (req, res) => {
    try {
      logic.retrieveUser(req.params.userId, (error, user) => {
        if (error) {
          res.status(500).json({ error: error.constructor.name, message: error.message });
          //error.constructor.name sirve para que nos refleje que tipo de error saldria
  
          return;
        }
  
        if (user) {
          res.status(202).json(user)
          /*
          res.status(202).send(`<!DOCTYPE html>
                  <html lang="en">
  
                  <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>API</title>
                  </head>
  
                  <body>
                      <h1>The chosen username is...</h1>
  
                      <p>${user.name}</p>
                      <p>${user.birthdate}</p>
                      <p>${user.email}</p>
                      <p>${user.username}</p>
                      
                  </body>
  
                  </html>`);
                  */
        } else {
          res.status(404).json(null);
        }
      });
    } catch (error) {
      res.status(500).json(null);
    }
  });




// TODO retrieve posts -> GET /posts
//RETRIEVE POSTS
// ...

api.listen(8080, () => console.log("API listening on port 8080"))
