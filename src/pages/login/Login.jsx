import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginIcon from '../../assets/svgs/undraw_education_f8ru.svg'
import { AuthContext } from '../../context/AuthContext'
import LoginIcon1 from '../../assets/svgs/undraw_secure_login_pdn4.svg'

const user = {email:'admin@test.com', password:'testadmin'}
const Login = () => {

    const { dispatch,  currentUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('Rantre kourye elektronik ou...')
    const [password, setPassword] = React.useState('00000000')


    useEffect(() => {
        if (currentUser) {
            navigate('/')
        }
    }, [currentUser, navigate])

    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (email === user.email && password === user.password) {
            dispatch({
                type: 'LOGIN',
                payload: user
            })
            navigate('/')
        }
    }

    return (
        <div className='login bg-gray-800 h-screen w-full'>

            <div className='grid py-16 md:grid-cols-2 grid-cols-1 w-full h-full justify-center items-center md:px-8 px-4 rounded-xl'>

                <div className='left  md:py-16 p-8 default-shadow-1 bg-gray-900 bg-opacity-95 h-full flex flex-col items-center justify-center rounded-l-2xl md:rounded-r-none rounded-r-2xl'>
                    <div className=' mb-10'>
                        <h1 className='text-3xl text-yellow-500 capitalize mb-2'> Konekte sou kont ou</h1>
                        <p className='text-gray-400'> Ranpli fòmilè a pou ou kapab rantre nan sistèm nan</p>
                    </div>

                    <div className='w-48 mb-14 '>
                        <img className=' rounded  ' src={LoginIcon1} alt='icon1'/>
                    </div>
                    
                    <form onSubmit={handleSubmit} className='form md:w-96 w-full'>
                        <label className="block w-full mb-5 md:p-0 p-2">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md ml-2 mb-3 font-semibold text-gray-300">
                                Rantre kouryèl elektwonik ou
                            </span>
                            <input type="email" 
                                required
                                onChange={e => setEmail(e.target.value)} 
                                
                                
                                className=" p-2 rounded-full bg-transparent border text-gray-400 focus:bg-transparent focus:text-gray-300 border-gray-400 w-full px-3" />
                        </label>

                        <label className="block w-full mt-2">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md ml-2 mb-3 font-semibold text-gray-300">
                                Rantre modpas ou
                            </span>
                            <input type="password" 
                                onChange={e => setPassword(e.target.value)} 
                                
                                required
                                className=" p-2 rounded-full w-full px-3 bg-transparent border text-gray-400 focus:bg-transparent focus:text-gray-300 border-gray-400" />
                        </label>

                        <div className='mb-4 mt-8 flex justify-center items-center'>
                            <button type='submit' className="bg-yellow-500 px-8 py-2 text-gray-800 font-bold hover:text-white uppercase rounded-full w-full hover:bg-yellow-600">
                                Konekte
                            </button>
                        </div>
                    </form>
                </div>

                <div className='right default-shadow-1 md:flex flex-col items-center justify-center text-center hidden md:py-16 py-8 px-24 bg-gradient-to-r from-gray-800 to-gray-900  w-full h-full text-gray-400 rounded-r-2xl'>
                    <h1 className='w-full text-3xl uppercase text-yellow-500 mb-16'> Byenvini sou platfòm nan </h1>
                    <img src={LoginIcon} alt='logo' className='max-w-sm'/>
                </div>
                
            </div>
            

        </div>

    )
}

export default Login