//FUNCIONES HECHAS CON EXPRESS JS

import express from "express";
import logic from "./logic/index.js";

const api = express();

const jsonBodyParser = express.json();

api.use((req, res, next) => {
  res.setHeader('Access-Control -Allow-Origin', '*')

  next()
})

//REGISTER USER CON EXPRESS JS

api.post("/users", jsonBodyParser, (req, res) => {
  try {
    const { name, birthdate, email, username, password } = req.body;

    logic.registerUser(name, birthdate, email, username, password, (error) => {
      if (error) {
        res
          .status(400)
          .json({ error: error.constructor.name, message: error.message });

        return;
      }

      res.status(201).send();
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: error.constructor.name, message: error.message });
  }
});

// TODO login user -> POST /users/auth
//LOGIN USER CON EXPRESS JS
api.post("/users/auth", jsonBodyParser, (req, res) => {
  try {
    const { username, password } = req.body;

    logic.loginUser(username, password, (error, userId) => {
      if (error) {
        res
          .status(400).json({ error: error.constructor.name, message: error.message });

        return;
      }

      res.status(202).send(userId);
    });
  } catch (error) {
    res
      .status(400).json({ error: error.constructor.name, message: error.message });
  }
});

// TODO retrieve user -> GET /users
//RETRIEVE USER CON EXPRESS JS
api.get("/users/:userId", jsonBodyParser, (req, res) => {
  try {
    logic.retrieveUser(req.params.userId, (error, user) => {
      if (error) {
        res
          .status(500)
          .json({ error: error.constructor.name, message: error.message });
        //error.constructor.name sirve para que nos refleje que tipo de error saldria

        return;
      }

      if (user) {
        res.status(202).json(user);
        
      } else {
        res.status(404).json(null);
      }
    });
  } catch (error) {
    res.status(500).json(null);
  }
});


// LOGOUT USER CON EXPRESS JS
api.patch("/users/:userId", jsonBodyParser, (req, res) => {
  try {
  logic.logoutUser(req.params.userId, (error, user) => {
    if (error) {
      res
        .status(500)
        .json({ error: error.constructor.name, message: error.message });
      //error.constructor.name sirve para que nos refleje que tipo de error saldria

      return;
    }

    if (user) {
      res.status(202).json(user);
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


api.listen(8080, () => console.log("API listening on port 8080"));
