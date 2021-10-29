import React from 'react';
import useFirebaseMongo from './../../Hooks/useFirebaseMongo';

const Slider = () => {
    const { mongodb: { sliderData } } = useFirebaseMongo();
    return (

        <div>

            {sliderData.length}

        </div>

    )
}

export default Slider;