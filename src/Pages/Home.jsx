import React from 'react'
import Newsletter from '../components/Newsletter/Newsletter'
import SliderComponent from '../components/Slider/Slider'
import ToursCom from '../components/ToursCom/ToursCom'

const Home = () => {
    return (
        <div>
            <section>
                <SliderComponent />
                <ToursCom/>
                <Newsletter/>
            </section>
        </div>
    )
}

export default Home
