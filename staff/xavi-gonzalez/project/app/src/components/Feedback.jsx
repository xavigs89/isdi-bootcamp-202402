//@ts-nocheck

import RoundButton from './library/RoundButton'
import { logger } from '../utils'

function Feedback({ message, level, onAcceptClick }) {
    logger[level](message)

    return <div className={`fixed inset-0 flex items-center justify-center top-0 w-full border-2 border-black ${level === 'error' ? 'bg-[#FFD6DB]' : level === 'warn' ? 'bg[#FFCD66]' : 'bg[#AFF8B6]'} flex flex-col items-center`} >
            <h3>{message}</h3>
            <RoundButton onClick={onAcceptClick}>Accept</RoundButton>
        </div>
}

export default Feedback