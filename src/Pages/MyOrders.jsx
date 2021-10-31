import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import useFirebaseMongo from '../Hooks/useFirebaseMongo';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { firebase: { firebaseData } } = useFirebaseMongo();
    const { email } = firebaseData;
    useEffect(() => {
        axios.get(`https://shrouded-badlands-43681.herokuapp.com/my_orders?email=${email}`)
            .then(res => {
                setMyOrders(res.data);
            })
    }, [email]);

    return (
        <div>
            {myOrders.length}
        </div>
    )
}

export default MyOrders
