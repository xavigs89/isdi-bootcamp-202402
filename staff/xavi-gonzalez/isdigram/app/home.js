// presentation

(function () {
    var title = document.querySelector('h1')
    var logoutButton = document.querySelector('#logoutButton')
    var postButton = document.querySelector('#createPost')
    var form = document.querySelector('form')

    try {
        var user = logic.retrieveUser(sessionStorage.username)

        title.innerText = 'Hello, ' + user.name + '!'
    } catch (error) {
        alert(error.message)
    }

    logoutButton.addEventListener('click', function () {
        logic.logoutUser()

        var loginAddress = location.href.replace('home', 'login')

        location.href = loginAddress
    })


    form.addEventListener('submit', function () {
        var imageInput = document.getElementById('photolink')
        var image = imageInput.value

        var textInput = document.getElementById('text')
        var text = textInput.value

        logic.createPost(image, text)
    })
})
//llamar a la funcion vacia IIFE
()















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