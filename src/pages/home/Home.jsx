import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CTASection } from '../../components/CTASection'
import { imageUrl1 } from '../../constant'



const Home = ({ quantity = 6 }) => {

    const navigate = useNavigate()

    const handleClick = (path) => {
        navigate(path)
    }

    return (
        <section>
            <CTASection title={'Bòs Ti Pyè'} subTitle='Byenvini sou platfòm nan'/>
            <div className='container'>

                <div className='cards-grid-rows'>
                    {
                        Array.from({ length: quantity }).map((_, index) => {
                            return (
                                <div className='card animate-marquee' key={index} onClick={()=> handleClick(`${index+1}e-af`)}>
                                    <img src={imageUrl1} alt={'image ' + index} />
                                    <div className='title-right'>
                                        <h1>{index + 1}e AF</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}

export default Home