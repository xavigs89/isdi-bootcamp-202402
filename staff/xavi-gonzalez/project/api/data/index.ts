import mongoose, { ObjectId } from "mongoose";

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

type UserType = {
    name: string
    birthdate: Date
    email: string
    username: string
    password: string
}

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})



const User = model<UserType>('User', user)


export {
    UserType,
    User,
}


//EVENTOS

// type EventType = {
//     author: ObjectId
//     title: string
//     date: Date
//     location: string,
//     description: string
//     image: string
// }

// const event = new Schema({
//     author: {
//         type: ObjectId,
//         ref: 'User',
//         required: true
//     },
//     title: {
//         rype: String,
//         required: true
//     },
//     date: {
//         type: Date,
//         required: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     },
// })


// const Event = model<EventType>('Post', event)

// EventType,
// Event