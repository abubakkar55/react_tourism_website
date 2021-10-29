import axios from 'axios';
import { useState, useEffect } from 'react';

const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/slider/data")
            .then(res => {
                console.log(res);
                setSliderData(res);
            })

    }, [])

    return {   sliderData }
}

export default useMongodb
