import { useParams } from 'react-router-dom'

import Header from './Header'

import { useState } from 'react'

function Profile({onUserLoggedOut}) {

    const onLogout = () => onUserLoggedOut()

    const { name } = useParams()

    // const loadMeetings = () => {

    //     try {
    //         logic.retrieveJoinedMeetings()
    //             .then(setMeetings)
    //             .catch(error => alert(error))
    //     } catch (error) {
    //         alert(error)
    //     }
    // }

    // useEffect(() => {
    //     loadMeetings()
    // }, [])

    // TODO call api to get posts by username


    return <>
    <main className="flex justify-between items-start h-screen bg-[#249D8C]">
        <Header onUserLoggedOut={onLogout}/>

        {/* <section>
            <div>
                <h1>Your matches:</h1>
            </div>
            <MatchesList matches={matches} />
        </section> */}




    </main>
    </>
    // return <h1>hello {name}</h1>
}

export default Profile