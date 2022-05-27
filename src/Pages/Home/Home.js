import React from 'react'
import Banner from './Banner'
import BussnessSamary from './BussnessSamary'
import Review from './Review'
import Tools from './Tools'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BussnessSamary></BussnessSamary>
            <Review></Review>
        </div>
    )
}

export default Home