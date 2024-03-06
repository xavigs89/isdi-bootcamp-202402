// business (logic)

var logic = (function () {
  function registerUser(name, birthdate, email, username, password) {
    var user = data.findUser(function (user) {
      return user.email === email || user.username === username;
    });

    if (user) throw new Error("user already exists");

    user = {
      name: name,
      birthdate: birthdate,
      email: email,
      username: username,
      password: password,
    };

    data.insertUser(user);
  }


  function loginUser(username, password) {
    var user = data.findUser(function (user) {
      return user.username === username && user.password === password;
    });

    if (!user) throw new Error("wrong credentials");

    sessionStorage.username = username;
  }

  function retrieveUser() {
    var user = data.findUser(function (user) {
      return user.username === sessionStorage.username;
    });

    if (!user) throw new Error("user not found");

    return user;
  }

  function logoutUser() {
    sessionStorage.clear();
  }

  function createPost(image, text) {
    var post = {
      author: sessionStorage.username,
      image: image,
      text: text,
      date: new Date().toLocaleDateString("en-CA"),
      id: Date.now()
    };

    data.insertPost(post);
  }

  function retrievePosts() {
    var posts = data.getAllPosts()

    return posts
  }

  return {
    registerUser: registerUser,
    loginUser: loginUser,
    retrieveUser: retrieveUser,
    logoutUser: logoutUser,
    createPost: createPost,
    retrievePosts: retrievePosts
  };
})
//llamar a la funcion vacia IIFE
()
/*
function registerUser(name, birthdate, email, username, password) {
  var exists = users.some(function (user) {
    return user.email === email || user.username === username;
  });

  if (exists) throw new Error("user already exists");

  var user = {
    name: name,
    birthdate: birthdate,
    email: email,
    username: username,
    password: password,
  };

  users.push(user);

  localStorage.users = JSON.stringify(users);
}

function loginUser(username, password) {
  var match = users.some(function (user) {
    return user.username === username && user.password === password;
  });

  if (!match) throw new Error("wrong credentials");

  sessionStorage.username = username;
}

function retrieveUser(username) {
  var user = users.find(function (user) {
    return user.username === username;
  });

  if (!user) throw new Error("user not found");

  return user;
}
*/
