import React from 'react'
import { getImage } from '../helpers/helper';
import Boul from './Boul';

const ImajEgzesis = ({ data, handleResult, opsyon }) => {

    const [myClass, setMyClass] = React.useState('');

    const handleClick = (data) => {
        const result = data.correctOption(data.name, opsyon)
        
        data.akImaj && setMyClass(result ? ' bg-amber-400 goodOption' : ' bg-red-500 w-full rounded wrongOption');
        !data.akImaj && setMyClass(result ? ' bg-amber-400 goodOption' : ' text-yellow-500 bg-amber-700 w-full rounded wrongOption');

        handleResult && handleResult(result, data.id);
    }

    const handleClick2 = (nom, index) => {

        const result = data.correctOption(nom, index, opsyon)
        
        setMyClass(result ? ' bg-amber-400 goodOption' : ' bg-red-500 w-full rounded wrongOption');

        handleResult && handleResult(result, data.id);
    }

    const hauteur = data.akBoul ? 'h-80' : 'h-56';
    

    return (
        <div className={' flex justify-center bg-gray-800 relative min-w-full rounded-md border overflow-hidden ' + hauteur}>

            {data.akImaj && !data.akBoul &&
                <div id={data.id} className={myClass + ' cursor-pointer min-w-full p-2 box-image flex justify-center '} onClick={() => handleClick(data)}>
                    <img className='object-contain  cursor-pointer' src={getImage(data.name, "png")} alt={data.id} />
                </div>}
            {!data.akImaj && !data.akBoul &&
                <div id={data.id} className={myClass + ' bg-gray-800 cursor-pointer min-w-full p-2 box-image flex items-center justify-center '} onClick={() => handleClick(data)}>
                    <h3 className="text-4xl text-gray-50 capitalize cursor-pointer "> {data.name}</h3>
                </div>
            }

            {data.akImaj && data.akBoul &&
                <div id={data.id} className={myClass + ' min-w-full p-2 box-image flex flex-col items-center justify-center '}>
                    <img className='object-contain h-40 w-40 mb-5 cursor-pointer' src={getImage(data.name, "png")} alt={data.id} />
                    <Boul handleClick={index => handleClick2(data.name, index)}/>
                </div>}



        </div>
    )
}

export default ImajEgzesis