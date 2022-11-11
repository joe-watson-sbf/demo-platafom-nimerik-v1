import React from 'react'

const ReziltaFinal = ({ repons, handleResetGame }) => {

    const handleReset=()=>{
        handleResetGame();
    }
    return (
        <div className='flex items-center justify-center content-center w-full'>
            <div className='h-full bg-gray-800 color-light border border-gray-800 py-16 w-3/5 rounded-md flex flex-col justify-center items-center'>
                <h4 className='text-3xl uppercase mb-14'>Rezilta Final</h4>

                <div className='flex flex-col'>
                    <span className='flex items-center justify-between gap-2 mb-5'>
                        <p className='flex items-center gap-4'>
                            <span className='w-4 h-4 block bg-blue-600 rounded-full'> </span>
                            {repons?.bon || 0} Bon Repons
                        </p>

                        <input className='ml-40 rounded-lg appearance-none bg-amber-500 h-2 w-128 ' disabled type={'range'} min={0} value={repons.bon} max={(repons.bon + repons.move)} />
                        {Math.round(100 * (repons.bon / (repons?.move + repons.bon))) || 0}%
                    </span>
                    <hr />
                    <span className='flex items-center justify-between gap-2 mt-5'>
                        <p className='flex items-center gap-4'>
                        <span className='w-4 h-4 block bg-red-600 rounded-full'> </span>
                        {repons?.move || 0} Move Repons
                        </p>

                        <input className='ml-40 rounded-lg appearance-none bg-red-600 h-2 w-128 ' disabled type={'range'} min={0} value={repons.move} max={(repons.bon + repons.move)} />
                        {Math.round(100 * (repons.move / (repons.move + repons.bon))) || 0}%
                    </span>
                </div>

                <button onClick={handleReset} 
                    className='uppercase color-light border mt-12 border-amber-100 hover:opacity-70 transition-all px-4 py-1 bg-transparent'>
                    Retounen </button>
            </div>
        </div>
    )
}

export default ReziltaFinal