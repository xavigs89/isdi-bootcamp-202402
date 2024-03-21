class Login extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <main>
            <h1>Login</h1>
            <form>
                <label>Username</label>
                <input id="username" />
                <label>Password</label>
                <input type="password" id="password" />
                <button className="round-button" type="submit">Login</button>
            </form>

            <a href="">Register</a>
        </main>
    }
}