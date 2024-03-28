const fs = require('fs')

console.log('start')

try {
    fs.readFile('./users.json', 'utf8', (error, usersJson) => {
        if (error) {
            console.error(error)

            return
        }

        const users = JSON.parse(usersJson)

        const user = {
            name: 'Manolo Chabacano',
            birthdate: '1982-01-01',
            email: 'manolo@gmail.com',
            username: 'manolo',
            password: 'Isdicoders1',
            status: 'offline',
            id: '3gskcipdb0c'
        }

        users.push(user)

        const usersJson2 = JSON.stringify(users)

        fs.writeFile('./users.json', usersJson2, error => {
            if (error) {
                console.error(error)

                return
            }

            console.log('end')
        })

    })
} catch (error) {
    console.error(error)
}

console.log('continue...')