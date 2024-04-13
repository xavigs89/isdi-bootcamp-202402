# API

## HTTP Request Mehtods

- GET

```sh
Requests a representation of the specified resource. It should only retrieve data.

```

- DELETE

```sh
Deletes the specified resource.

```

- POST

```sh
Submits an entity to the specified resource, often causing a change in state or side effects on the server.

```
## endpoints

- register user

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name":"Pepito Grillo","birthdate":"2000-01-01","email":"pepito@grillo.com","username":"pepitogrillo","password":"123123abc"}' http://localhost:8080/users -v

```

- login user

```sh
curl -X POST -H "Content-Type: application/json" -d '{"username":"rickyf","password":"Isdicoders1"}' http://localhost:8080/users/auth -v

```

- logout user
```sh
curl -X PATCH -H "Content-Type: application/json" -d '{"status":"offline"}' http://localhost:8080/users/7fhuknq3agc -v

```

- retrieve user
```sh
localhost:8080/users/ put userID

```


//TODO