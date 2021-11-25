import axios from 'axios';
import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useMongodb = () => {
    const [sliderData, setSliderData] = useState([]);
    const [tourData, setTourData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const { firebaseData } = useFirebase();
    // slider data
    useEffect(() => {
        axios.get("https://infinite-forest-12039.herokuapp.com/sliders_data")
            .then(res => {
                setSliderData(res.data);
            })
    }, []);

    // Tour data
    useEffect(() => {
        axios.get("https://infinite-forest-12039.herokuapp.com/tours")
            .then(res => {
                setTourData(res.data);
            })
    }, []);

   

    return { sliderData, tourData, isFetching, setIsFetching }
}

export default useMongodb
