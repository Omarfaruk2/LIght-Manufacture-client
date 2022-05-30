import React from 'react'
import Banner from './Banner'
import BussnessSamary from './BussnessSamary'
import Review from './Review'
import SpicialLook from './SpicialLook'
import Tools from './Tools'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BussnessSamary></BussnessSamary>
            <SpicialLook></SpicialLook>

            <Review></Review>
        </div>
    )
}

export default Home