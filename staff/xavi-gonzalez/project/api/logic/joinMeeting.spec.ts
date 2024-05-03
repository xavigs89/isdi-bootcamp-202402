import dotenv from 'dotenv'
import { errors } from 'com'
import mongoose from 'mongoose'
import { expect, use } from 'chai'

import { User, Meeting } from '../data/index.ts'


describe('joinMeeting', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds when you join a meeting', () => 
    
    Promise.all([
        User.deleteMany({ }),
        Meeting.deleteMany({ })
    ])

        .then(() => 
            Promise.all([
                User.create({ name: 'Xavi Gonzalez', email: 'xavi@gmail.com', password: '123qwe123', avatar: null, about: null }),
                User.create({ name: 'Perico de los Palotes', email: 'perico@gmail.com', password: 'Isdicoders1', avatar: null, about: null }),
                User.create({ name: 'Armando Guerra', email: 'armando@gmail.com', password: 'Isdicoders1', avatar: null, about: null }),
            ])
            
            .then(user => 
                Promise.all([
                    User.create({ name: 'Paquito Chocolatero', email: 'paquito@gmail.com', password: '123qwe123', avatar: null, about: null })
                        .then

                ])
            )
            
            .then
    
    
    
    ))
})
