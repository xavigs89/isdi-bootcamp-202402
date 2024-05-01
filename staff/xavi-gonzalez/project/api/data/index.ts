import mongoose, { ObjectId } from "mongoose";

const { Schema, model } = mongoose

const { Types: { ObjectId } } = Schema

type UserType = {
    name: string
    email: string
    password: string
    avatar?: string
    about?: string
}

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    about: {
        type: String,
    }
})

type PointType = {
    type: string,
    coordinates: [number, number]
}

const point = new Schema({
    type: {
        type: String,
        enum: [`Point`],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
})

// type AttendeeType = {
//     id: string
//     name: string
//     email: string
// }

type MeetingType = {
    author: ObjectId
    title: string
    address: string
    location: [Number, Number]
    date: Date
    //duration: number
    description: string
    image: string
    attendees: ObjectId[]
}

const meeting = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: [Number, Number],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    attendees: [{
        type: ObjectId,
        ref: 'User'
    }],
})


type ReviewType = {
    author: ObjectId
    rate: 1 | 2 | 3 | 4 | 5
    comment?: string
    date: Date
}

const review = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    rate: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        // Hacer una función en frontend que tome el valor numérico de rate y muestre la cantidad correspondiente de iconos de estrellas. Si rate es 1, mostrarías una sola estrella; si es 2, mostrarías dos estrellas, y así sucesivamente hasta 5 estrellas para rate igual a 5.
    },
    comment: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
    },


})




const User = model<UserType>('User', user)
const Meeting = model<MeetingType>('Meeting', meeting)
const Review = model<MeetingType>('Review', review)
const Point = model<PointType>('Point', point)

export {
    UserType,
    User,
    MeetingType,
    Meeting,
    ReviewType,
    Review,
    PointType,
    Point,
}









