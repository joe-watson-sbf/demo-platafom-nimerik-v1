import React from 'react'

const Boul = ({ handleClick }) => {

    const handleOnClick = (id) => {
        handleClick && handleClick(id);
    }

    const getColor = (index) => {
        if(index===0) return "bg-red-500";
        if(index===1) return "bg-yellow-500";
        if(index===2) return "bg-green-500";
    }

    return (
        <div className='w-36 grid grid-cols-3 gap-4 items-center'>
            {
                Array.from(Array(3).keys()).map((item, index) => {
                    return (
                        <span key={index} onClick={()=> handleOnClick(index)} 
                            className={`w-10 h-10 cursor-pointer hover:shadow-md transition-all hover:scale-110 rounded-full inline-block ` + getColor(index)}></span>
                    )
                })
            }
        </div>
    )
}

export default Boul