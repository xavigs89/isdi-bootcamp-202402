// business (logic)

var logic = (function () {
  function registerUser(name, birthdate, email, username, password) {

    //validaciones
    if (typeof name !== 'string') throw new Error('name is not a string')

    if (!name.length) throw new Error('name is empty')

    //TODO input validation
    if (!email.length) throw new Erro ('username is empty')
    if (!username.length) throw new Error('username is empty')
    if (!password.length) throw new Error('password is empty')
/*
    function validatePassword() {
      var newPassword = document.getElementById('changePasswordForm').newPassword.value;
      var minNumberofChars = 6;
      var maxNumberofChars = 16;
      var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      alert(newPassword); 
      if(newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars){
          return false;
      }
      if(!regularExpression.test(newPassword)) {
          alert("password should contain at least one number and one special character");
          return false;
      }
  }

*/


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
    //TODO input validation




    var user = data.findUser(function (user) {
      return user.username === username && user.password === password;
    });

    if (!user) throw new Error("wrong credentials");

    sessionStorage.userId = user.id;
  }

  function retrieveUser() {
    var user = data.findUser(function (user) {
      return user.id === sessionStorage.userId;
    });

    if (!user) throw new Error("user not found");

    return user;
  }

  function logoutUser() {
    sessionStorage.clear();
  }

  function getLoggedInUserId() {
    return sessionStorage.userId
  }

  function isUserLoggedIn() {
    return !!sessionStorage.userId
  }

  function createPost(image, text) {
    //TODO input validation


    var post = {
      author: sessionStorage.userId,
      image: image,
      text: text,
      date: new Date().toLocaleDateString("en-CA"),
    };

    data.insertPost(post);
  }

  function retrievePosts() {
    var posts = data.getAllPosts()

    posts.forEach(function (post) {
      var user = data.findUser(function (user) {
        return user.id === post.author
      })

      post.author = { id: user.id, username: user.username }
    })

    return posts
  }


  function removePost(postId) {
    //TODO input validation

    var post = data.findPost(function (post) {
      return post.id === postId
    })

    if (!post) throw new Error('post not found')

    if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

      data.deletePost(function (post) {
      return post.id === postId
    })
  }

  return {
    registerUser: registerUser,
    loginUser: loginUser,
    retrieveUser: retrieveUser,
    logoutUser: logoutUser,
    getLoggedInUserId: getLoggedInUserId,
    isUserLoggedIn:isUserLoggedIn,
    createPost: createPost,
    retrievePosts: retrievePosts,
    removePost: removePost,
  };
})
//llamar a la funcion vacia IIFE
()