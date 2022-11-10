import React from 'react'
import { listKlasYo } from '../../constant'
import { Link, useNavigate } from 'react-router-dom'
import { CTASection } from '../../components/CTASection'

const JenerikPaj = ({ kle, title, displayColumn = false, klas, btnText , children}) => {

    const navigate = useNavigate()
    const handleClick = (path) => {
        !displayColumn && navigate(path)
    }

    return (
        <section>
            <CTASection title={'Bòs Ti Pyè'} subTitle={ klas +' - '+title} />
            <div className='container'>

                {!kle && <>{children}</>}
                
                <div className={displayColumn ? 'cards-grid-column' : 'cards-grid-rows'}>


                    { kle && listKlasYo()[kle].map((data, index) => {
                            return (
                                <div className='card' key={index} onClick={() => handleClick(data.path)}>
                                    {!displayColumn && <img src={data.image} alt={'image ' + index} />}
                                    
                                    {displayColumn &&
                                        <div className='content'>

                                            <div className='box-image'>
                                                <img src={data.image} alt={'image ' + index} />
                                            </div>
                                            <div className='box-text'>
                                                <h1>{data.name}</h1>
                                                <h4>{data.tan}</h4>
                                                {klas && <h3>{klas}</h3>}


                                            </div>
                                        </div>
                                    }
                                    {!displayColumn && <div className='title-center'>
                                        <h1>{data.name}</h1>
                                    </div>}

                                    {
                                        displayColumn && <div className='box-button'>
                                            <div className="inline-flex">
                                                <Link
                                                    to={data.path}
                                                    className="inline-flex items-center justify-center border border-transparent hover:bg-yellow-600 hover:border-yellow-600 px-5 py-3 text-base font-medium text-white bg-gray-700">
                                                    {btnText}
                                                </Link>
                                            </div>
                                            <div className="inline-flex">
                                                <Link
                                                    to={data.path}
                                                    className="inline-flex items-center justify-center border border-transparent bg-white px-5 py-3 text-base font-medium text-yellow-600 hover:text-gray-600 hover:bg-indigo-50 shadow"
                                                >
                                                    Plis Detay
                                                </Link>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default JenerikPaj