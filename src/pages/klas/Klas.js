import React from 'react'
import { listKlasYo } from '../../constant'
import { useNavigate } from 'react-router-dom'
const imageUrl = 'https://plus.unsplash.com/premium_photo-1663108237864-da30e09faab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'

const Klas = ({key='matye'}) => {

    const navigate = useNavigate()
    const handleClick = (path) => {
        navigate(path)
    }

    return (
        <div className='container'>
            <h1> KLAS YO </h1>

            <div className='cards'>
                {
                    listKlasYo()[key].map((data, index) => {
                        return (
                            <div className='card' key={index} onClick={() => handleClick(data.path)}>
                                <img src={imageUrl} alt={'image ' + index} />
                                <div className='title'>
                                    <h1>{data.name}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Klas