import axios from 'axios';
import { useState, useEffect } from 'react';

const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);
    const [tourData, setTourData] = useState([]);

    // slider data
    useEffect(() => {
        axios.get("http://localhost:5000/slider/data")
            .then(res => {
                setSliderData(res.data);
            })

    }, []);

    // Tour data
    useEffect(() => {
        axios.get("http://localhost:5000/tour/package/data")
            .then(res => {
                setTourData(res.data);
            })
    }, []);




    return { sliderData, tourData }
}

export default useMongodb
