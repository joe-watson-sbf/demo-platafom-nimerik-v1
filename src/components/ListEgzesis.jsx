import React from 'react'

const ListEgzesis = ({tit, id, handleId}) => {

    const handleClick = (id) => {
       handleId && handleId(id);
    }

    return (
        <div className='flex sm:flex-row flex-col mb-12 border-t-8 border-gray-900 bg-white md:mx-14 mx-1 shadow-lg justify-between py-4 px-8 items-center'>

            
            
            <div className='flex-1'>
                <h1 className='text-2xl text-gray-700'>{tit}</h1>
                <p className='capitalize text-gray-500 font-bold my-1'> Dire - <span className='font-light'> {id + 1} Minit </span></p>
                <h4 className='text-amber-600 font-bold'>1e AF</h4>
            </div>
            <div className="m-4 inline-flex shadow" onClick={()=> handleClick(id)}>
                <p
                    className="inline-flex cursor-pointer items-center justify-center border border-transparent hover:bg-gray-800 bg-gray-900 px-4 py-1 text-base font-medium color-light"
                >
                    Rezoud
                </p>
            </div>
        </div>
    )
}

export default ListEgzesis