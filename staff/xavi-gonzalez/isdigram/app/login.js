// presentation

var form = document.querySelector('form')
var registerLink = document.querySelector('a')

form.addEventListener('submit', function (event) {
    console.log('form submit');

    //quitar la opcion de que al darle a submit, no haga f5 y se actualice
    event.preventDefault()

    var usernameInput = document.getElementById('username')
    var username = usernameInput.value

    var passwordInput = document.getElementById('password')
    var password = passwordInput.value


    try {
        loginUser(username, password)

        form.reset()

        
        var homeAdress = location.href.replace('login', 'home')
        location.href = homeAdress
    } catch (error) {
        alert(error.message)
    }
})