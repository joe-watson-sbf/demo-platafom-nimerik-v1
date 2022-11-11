import React from 'react'
import { getAudio } from '../helpers/helper'

export const AnTetEgzesis = ({audioName, etap, title, akAudio}) => {
    return (
        <div className='p-4  border border-gray-400 bg-gray-50 md:mb-6 mb-2 text-center rounded shadow-md'>
            <h2 className='text-xl text-amber-500 sm:mb-4 mb-2'> ETAP - {etap} </h2>
            <h2 className='text-3xl text-gray-600'> {title} </h2>
            {akAudio && <audio className='audio-element mb-4' src={getAudio(audioName)} controls autoPlay={false} />}
        </div>

    )
}
