import React from 'react'
import { getImage } from '../helpers/helper';

const ImajEgzesis = ({ data, handleResult, opsyon }) => {

    const [myClass, setMyClass] = React.useState('');

    const handleClickOnImage = (data) => {
        const result = data.correctOption(data.name, opsyon)
        setMyClass(result ? ' bg-gray-700 goodOption' : ' bg-gray-700 w-full rounded wrongOption');

        handleResult && handleResult(result, data.id);
    }

    return (
        <div className=' flex justify-center bg-white relative min-w-full h-56 rounded-md border overflow-hidden '>
            <div id={data.id} className={myClass + '  min-w-full p-2 box-image flex justify-center '} onClick={() => handleClickOnImage(data)}>
                <img className='object-contain' src={getImage(data.name)} alt={data.id} />
            </div>
        </div>
    )
}

export default ImajEgzesis