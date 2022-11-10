import React from 'react'
import { dataEgzesisLeti } from '../../constant'
import ImajEgzesis from '../../components/ImajEgzesis';

const EgzesisLekti = () => {

    const egzesis = dataEgzesisLeti;
    const opsyon = dataEgzesisLeti.opsyon;

    const [chwaIds, setChwaIds] = React.useState([]);
    const [repons, setReponse] = React.useState({ bon: 0, move: 0 });


    const handleResponse = (rezilta, id) => {

        if(!chwaIds.includes(id)) {
            setChwaIds([...chwaIds, id]);
            rezilta && setReponse({...repons, bon: (repons.bon + 1)});
            !rezilta && setReponse({...repons, move: (repons.move + 1)});
        }
    }

    return (
        <div className='container'>

            <div className='flex flex-col gap-4 px-5 mb-8'>
                <div className='p-4  border mb-4 text-center rounded'>
                    <h1 className='text-2xl text-gray-600'> {egzesis.title} [ {opsyon.toLocaleUpperCase()} ] </h1>
                </div>

                <div className='flex md:flex-row flex-col gap-4'>

                    <div className='md:p-8 p-2 w-full default-shadow bg-slate-50'>
                        <div className='grid md:grid-cols-3 grid-cols-2 justify-items-center flex-wrap md:gap-4 gap-3'>
                            {egzesis.dataList.map((data, index) => {
                                return (
                                    <ImajEgzesis key={index} handleResult={handleResponse} data={data} opsyon={opsyon}/>
                                )
                            })
                            }
                        </div>
                    </div>

                    <div className='p-4 md:w-1/4 w-full bg-gray-100 default-shadow'>
                        <h1 className='text-xl text-gray-600'> REZILTA CHWA OU YO </h1>
                        <div className='flex flex-col gap-5 my-5 '>
                            <span className='block w-40 bg-blue-100 rounded p-3'>Bon Repons: {repons.bon} </span>
                            <span className='block w-40 bg-red-100 rounded p-3'>Move Repons: {repons.move} </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EgzesisLekti