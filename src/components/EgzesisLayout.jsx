import React from 'react'
import { CTASection } from './CTASection'

const EgzesisLayout = ({children}) => {

    const getTitle =()=> {
        const list = window.location.pathname.split('/')
        return 'Egzèsis - ' + list[list.length - 1].replace(/-/g, ' ').toLocaleUpperCase()
    }

    return (
        <section>
            <CTASection title={'Bòs Ti Pyè'} subTitle={getTitle()}/>
            <div className='container'>
                {children}
            </div>
        </section>
    )
}

export default EgzesisLayout