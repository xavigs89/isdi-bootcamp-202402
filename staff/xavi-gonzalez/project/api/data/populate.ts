import mongoose from "mongoose";

import { User, Meeting } from '.'

mongoose.connect('mongodb://localhost:27017/project')

    .then(() => Promise.all([
        User.deleteMany(),
        Meeting.deleteMany()
    ]))
    .then(() => User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123' }))

    .then(user => {
        // let count = 1
        // const meeting1 = { author: user1._id, title: }
        return Meeting.create([
            {
            author: user._id,
            title: 'My Event',
            address: 'Sesame Street',
            location: [41.3752827972332, 2.1480333604674424],
            date: new Date(),
            description: 'We are going to make asadito',
            image: 'https://media.tenor.com/4vEak67C7BoAAAAe/fort-ricardo-fort.png',
            attendees: [user.id]
            }

        ])
       
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error);