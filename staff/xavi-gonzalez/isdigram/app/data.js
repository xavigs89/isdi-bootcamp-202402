// data

//creacion de funcion IIFE para crear funcion vacia que
var data = (function () {
  function findUser(callback) {
    var users = JSON.parse(localStorage.users || "[]");

    var user = users.find(callback);

    return user;
  }

  function insertUser(user) {
    var users = JSON.parse(localStorage.users || "[]");

    users.push(user);

    localStorage.users = JSON.stringify(users);
  }

  function insertPost(post) {
    var posts = JSON.parse(localStorage.posts || "[]");

    posts.push(post);

    localStorage.posts = JSON.stringify(posts);
  }

  return {
    findUser: findUser,
    insertUser: insertUser,
    insertPost: insertPost,
  };
})();
//llamar a la funcion vacia IIFE

/*solucion anterior
if (localStorage.users) {
    var users = JSON.parse(localStorage.users)
}
else {
    var users = []
}


solucion manu con ternarios
var users = localStorage.users ? JSON.parse(localStorage.users) : []
*/
