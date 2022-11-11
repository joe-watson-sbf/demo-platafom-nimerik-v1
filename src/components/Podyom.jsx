import React from 'react'

export const Podyom = ({ repons = { bon: 0, move: 0 } }) => {
    return (
        <div className='p-4 md:w-72 h-60 w-full bg-gray-700 border-t-8 border-amber-400'>
            <h1 className='text-xl text-amber-400'> REZILTA CHWA OU YO </h1>
            <div className='flex flex-col gap-5 my-5 '>
                <span className='block w-40 bg-cyan-50 rounded-sm p-3'>Bon Repons: {repons.bon} </span>
                <span className='block w-40 bg-light-color rounded-sm p-3'>Move Repons: {repons.move} </span>
            </div>
        </div>
    )
}
