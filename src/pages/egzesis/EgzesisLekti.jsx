import React from 'react'
import { dataEgzesisLeti } from '../../constant'
import ImajEgzesis from '../../components/ImajEgzesis';
import { useGeneric } from '../../hoooks/useGeneric';
import { Podyom } from '../../components/Podyom';
import { AnTetEgzesis } from '../../components/AnTetEgzesis';
import ListEgzesis from '../../components/ListEgzesis';
import ReziltaFinal from '../../components/ReziltaFinal';


const EgzesisLekti = () => {

    const [gameIsOver, setGameIsOver] = React.useState(false);

    const { handleResponse, repons, handleResetGame, kantiteSleksyon } = useGeneric()
    const [egzesisId, setEgzesisId] = React.useState(-1);
    const [egzesis, setEgzesis] = React.useState(null);

    React.useEffect(() => {
        if( egzesis?.dataList && kantiteSleksyon === egzesis.dataList.length) {
            setGameIsOver(true);
        }else{
            setGameIsOver(false);
        }
    }, [egzesis, kantiteSleksyon, handleResetGame])

    const handleReset=()=>{
        handleResetGame();
        setEgzesisId(-1);
        setEgzesis(null);
        setGameIsOver(false);
    }

    React.useEffect(() => {
        egzesisId>=0 && setEgzesis(dataEgzesisLeti[egzesisId]);
        egzesisId<0 && setEgzesis(null);
    }, [egzesisId])

    const handleResult = (rezilta, id) => {
        handleResponse(rezilta, id);
    }

    return (
        <div className='container'>

            {!egzesis && !gameIsOver && <>
                <h3 className='text-4xl w-full text-amber-600 underline underline-offset-8 text-center mb-10 uppercase'> Lis egzèsis yo</h3>
                {
                    dataEgzesisLeti.map((egzesis, index) => {
                        return <ListEgzesis key={index} tit={egzesis.title} id={index} handleId={setEgzesisId} />
                    })
                }
            </>}
           

            {egzesis && <div className='flex flex-col gap-4 px-5 mb-8'>

                <AnTetEgzesis akAudio={egzesis.akAudio} etap={egzesis.etap} audioName={egzesis.audio} title={egzesis.title} />

                <div className='flex md:flex-row flex-col gap-4'>

                    {!gameIsOver && <div className=' w-full bg-white'>
                        <div className='grid md:grid-cols-3 grid-cols-2 justify-items-center flex-wrap md:gap-4 gap-3'>
                            {egzesis.dataList.map((data, index) => {
                                return (
                                    <ImajEgzesis key={index} handleResult={handleResult} data={{...data, akBoul: egzesis.akBoul}} opsyon={egzesis.opsyon} />
                                )
                            })
                            }
                        </div>
                    </div>}


                    {!gameIsOver && <Podyom repons={repons} />}

                    {gameIsOver && <ReziltaFinal repons={repons} handleResetGame={handleReset}/>}

                </div>
            </div>}
        </div>
    )
}

export default EgzesisLekti