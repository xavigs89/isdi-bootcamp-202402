// presentation

(function () {
  var title = document.querySelector("h1");
  var logoutButton = document.querySelector("#logout-button");
  var createPostSection = document.querySelector("#create-post-section");
  var createPostForm = createPostSection.querySelector("form");
  var createPostCancelButton = createPostSection.querySelector(
    "#create-post-cancel-button"
  );
  var createPostButton = document.querySelector("#create-post-button");
  var postListSection = document.querySelector("#post-list-section");

  try {
    var user = logic.retrieveUser();

    title.innerText = "Hello, " + user.name + "!";
  } catch (error) {
    alert(error.message);
  }

  logoutButton.onclick = function () {
    logic.logoutUser();

    var loginAddress = location.href.replace("home", "login");

    location.href = loginAddress;
  };

  createPostForm.onsubmit = function (event) {
    event.preventDefault();

    var imageInput = createPostForm.querySelector("#image-link");
    var image = imageInput.value;

    var textInput = createPostForm.querySelector("#text");
    var text = textInput.value;

    try {
      logic.createPost(image, text);

      createPostForm.reset();

      createPostSection.computedStyleMap.display = "none";

      renderPosts();
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  createPostButton.onclick = function () {
    createPostSection.style.display = "block";
  };

  createPostCancelButton.onclick = function () {
    createPostSection.style.display = "none";
  };

  //crear funcion que guarda posts en orden que tu quieras
  function renderPosts() {
    try {
      var posts = logic.retrievePosts();

      postListSection.innerHTML = "";

      posts.forEach(function (post, index) {
        var article = document.createElement("article");

        var authorHeading = document.createElement("h3");
        authorHeading.innerText = post.author;

        var image = document.createElement("img");
        image.src = post.image;

        var paragraph = document.createElement("p");
        paragraph.innerText = post.text;

        var dateTime = document.createElement("time");
        dateTime.innerText = post.date;

        var deletePostButton = document.createElement("button");
        deletePostButton.innerText = "Delete Post";
        deletePostButton.addEventListener('click', function() {
            var idToDelete = post.id
            deletePost ()
        })

        /*var idPost = index + 1;
        deletePostButton.id = idPost;
        */

        article.append(authorHeading, image, paragraph, dateTime, deletePostButton);

        postListSection.appendChild(article);
      });
    } catch (error) {
      alert(error.message);
    }
}

  renderPosts();
})();
//llamar a la funcion vacia IIFE
/*
var title = document.querySelector('h1')
var logoutButton  = document.querySelector('#logoutbutton')


try {
    var user = retrieveUser(sessionStorage.username)

    title.innerText = 'Hello, ' + user.name + '!'

} catch (error) {
    alert(error.message)
}

logoutButton.addEventListener('click', function () {
    sessionStorage.clear()

    var loginAdress = location.href.replace('home', 'login')

    location.href = loginAdress
})
*/
