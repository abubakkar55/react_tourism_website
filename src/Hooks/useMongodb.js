import axios from 'axios';
import { useState, useEffect } from 'react';

const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);
    const [tourData, setTourData] = useState([]);

    // slider data
    useEffect(() => {
        axios.get("https://shrouded-badlands-43681.herokuapp.com/sliders_data")
            .then(res => {
                setSliderData(res.data);
            })
    }, []);

    // Tour data
    useEffect(() => {
        axios.get("https://shrouded-badlands-43681.herokuapp.com/tours")
            .then(res => {
                setTourData(res.data);
            })
    }, []);

    return { sliderData, tourData }
}

export default useMongodb
