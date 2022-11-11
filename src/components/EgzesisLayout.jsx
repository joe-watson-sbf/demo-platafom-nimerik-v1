import React from 'react'
import { CTASection } from './CTASection'

const EgzesisLayout = ({ children }) => {

    const getTitle = () => {
        const list = window.location.pathname.split('/')
        return 'Egzèsis - ' + list[list.length - 1].replace(/-/g, ' ').toLocaleUpperCase()
    }

    return (
        <section>
            <CTASection title={'Bòs Ti Pyè'} subTitle={getTitle()} />

            <div className='container relative'>

                <div className='flex flex-col gap-4 mb-8'>
                    

                    <div className='flex md:flex-row flex-col gap-4'>

                        <div className='md:p-8 p-2 w-full shadow-xl bg-white'>
                            {children}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default EgzesisLayout