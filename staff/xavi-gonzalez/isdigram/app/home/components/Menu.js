function Menu() {
    Component.call(this, "nav")

    var chatButton = new Button
    chatButton.setText("💬")

    var logoutButton = new Button
    logoutButton.setText("🚪")

    logoutButton.onClick(function () {
        logic.logoutUser()

        location.href = "../login"
    })
    
        this.add(chatButton,logoutButton)
    }

    Menu.prototype = Object.create(Component.prototype)
    Menu.prototype.constructor = Menu