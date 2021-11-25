import axios from 'axios';
import { useState, useEffect } from 'react';
import useFirebase from './useFirebase';

const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);
    const [tourData, setTourData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const { firebaseData } = useFirebase();
    // slider data
    useEffect(() => {
        axios.get("http://localhost:5000/sliders_data")
            .then(res => {
                setSliderData(res.data);
            })
    }, []);

    // Tour data
    useEffect(() => {
        axios.get("http://localhost:5000/tours")
            .then(res => {
                setTourData(res.data);
            })
    }, []);

   

    return { sliderData, tourData, isFetching, setIsFetching }
}

export default useMongodb
