import React from 'react'
import Newsletter from '../components/Newsletter/Newsletter'
import SliderComponent from '../components/Slider/Slider'

const Home = () => {
    return (
        <div>
            <section>
                <SliderComponent />
                <Newsletter/>
            </section>
        </div>
    )
}

export default Home
