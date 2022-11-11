import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { AuthContext } from '../context/AuthContext'


export const CTASection = ({ title, subTitle }) => {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    /* const date = new Date().toLocaleString()
    const salitasyon = date.includes('PM') ? 'Bonswa,' : 'Bonjou,' */

    const pathName = window.location.pathname

    const handBack = () => {
        navigate(-1)
    }

    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT',
        })
        navigate('/login')
    }

    return (
        <div className="bg-gray-800 sm:h-40 h-50 sm:text-justify drop-shadow-md sm:mb-20 mb-16">
            <div className="mx-auto max-w-7xl flex justify-between flex-wrap py-8 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-10 lg:px-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
                    {/* <span className="block">{salitasyon + ' ' + title} </span> */}
                    <span className="block color-light">{subTitle}</span>
                </h2>

                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex shadow">
                        <Link
                            to="/"
                            className="inline-flex uppercase items-center justify-center border border-transparent hover:bg-yellow-600 hover:border-yellow-600 px-5 py-3 text-base font-medium text-white bg-gray-700">
                            Paj Akèy
                        </Link>
                    </div>
                    <div className="ml-3 inline-flex shadow">
                        <p
                            onClick={handleLogout}
                            className="inline-flex cursor-pointer items-center justify-center border border-transparent bg-white px-5 py-3 text-base font-medium text-yellow-600 hover:text-gray-600 hover:border-gray-600 hover:bg-indigo-50"
                        >
                            DEKONEKTE
                        </p>
                    </div>
                </div>

            </div>

           {pathName !== '/' && <div className=' px-4 py-2 bg-white'>
                
                <p onClick={handBack} className="flex py-4 cursor-pointer w-28 items-center">
                    <TiArrowBack/><span className='mx-2 underline-offset-8 uppercase font-bold hover:text-gray-800 text-xs text-gray-500'> Retounen</span>
                </p>
            </div>}

            
        </div>
    )
}
