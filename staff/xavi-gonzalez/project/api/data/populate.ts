import mongoose from "mongoose";

import { User, Meeting } from '.'

mongoose.connect('mongodb://localhost:27017/project')

    .then(() => User.deleteMany())
    .then(() => Meeting.deleteMany())

    .then(() => User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123', avatar: null, about: null }))

    .then(user1 => {
        return Promise.all([

            User.create({ name: 'Toni Senil', email: 'toni@gmail.com', password: '123qwe123', avatar: null, about: null }),
            User.create({ name: 'Maria Juana', email: 'maria@gmail.com', password: '123qwe123', avatar: null, about: null }),
            User.create({ name: 'Luisito Robles', email: 'luis@gmail.com', password: '123qwe123', avatar: null, about: null }),
            User.create({ name: 'Heber Trolaso', email: 'trolaso@gmail.com', password: '123qwe123', avatar: null, about: null }),
            User.create({ name: 'Dolores Fuertes', email: 'dolores@gmail.com', password: '123qwe123', avatar: null, about: null }),
            User.create({ name: 'Pepita Gonsales', email: 'pepita@gmail.com', password: '123qwe123', avatar: null, about: null }),
            User.create({ name: 'Eustaquio Garcia', email: 'eustaquio@gmail.com', password: '123qwe123', avatar: null, about: null }),
            User.create({ name: 'Lorena Sanchez', email: 'lorena@gmail.com', password: '123qwe123', avatar: null, about: null }),
            User.create({ name: 'Pepe Puntilla', email: 'pepe@gmail.com', password: '123qwe123', avatar: null, about: null })
        ])
            .then(([user2, user3, user4, user5, user6, user7, user8, user9, user10]) => {
                return Meeting.create({ author: user1._id, title: 'My Event', address: 'Sesame Street',
                location: [41.3752827972332, 2.1480333604674424],
                date: new Date().toISOString(),
                description: 'We are going to make asadito',
                image: 'https://media.tenor.com/4vEak67C7BoAAAAe/fort-ricardo-fort.png',
                attendees: [user1.id, user2.id, user3.id, user4.id, user5.id, user6.id, user7.id, user8.id, user9.id, user10.id] })
            })
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error);



          // return Meeting.create([
        //     {
        //         author: user._id,
        //         title: 'My Event',
        //         address: 'Sesame Street',
        //         location: [41.3752827972332, 2.1480333604674424],
        //         date: new Date(),
        //         description: 'We are going to make asadito',
        //         image: 'https://media.tenor.com/4vEak67C7BoAAAAe/fort-ricardo-fort.png',
        //         attendees: [user.id]
        //     }

        // ])
