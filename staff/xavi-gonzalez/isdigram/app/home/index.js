// presentation

(function () {

  if (!logic.isUserLoggedIn()) {
    location.href = '../login'

    return
  }


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
    console.error(error)

    alert(error.message);
  }

  logoutButton.onclick = function () {
    logic.logoutUser();

    location.href = '../login'

    //var loginAddress = location.href.replace("home", "login");

    //location.href = loginAddress;
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

      createPostSection.style.display = "none";

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

      posts.forEach(function (post) {
          var article = document.createElement("article");

          var authorHeading = document.createElement("h3");
          authorHeading.innerText = post.author.username;

          var image = document.createElement("img");
          image.src = post.image;

          var paragraph = document.createElement("p");
          paragraph.innerText = post.text;

          var dateTime = document.createElement("time");
          dateTime.innerText = post.date;

          article.append(authorHeading, image, paragraph, dateTime);

          if (post.author.id === logic.getLoggedInUserId()) {
            var deleteButton = document.createElement('button')

            deleteButton.innerText = '🗑'

            deleteButton.onclick = function () {
              if (confirm('Are you sure you want to delete post'))
              try {
                logic.removePost(post.id)

                renderPosts()
              } catch (error) {
                console.error (error)

                alert (error.message)
              }
            }

            article.appendChild(deleteButton)
          }

          postListSection.appendChild(article)
          })

        } catch (error) {
          console.error (error)

          alert(error.message)
        }
      }
      renderPosts()
    })
//llamar a la funcion vacia IIFE
()