import { useParams } from 'react-router-dom'

import Header from './Header'

import { useState } from 'react'

function Profile({onUserLoggedOut}) {

    const onLogout = () => onUserLoggedOut()

    const { name } = useParams()

    // TODO call api to get posts by username


    return <>
    <main className="h-screen bg-white">
        <Header onUserLoggedOut={onLogout}/>




    </main>
    </>
    // return <h1>hello {name}</h1>
}

export default Profile