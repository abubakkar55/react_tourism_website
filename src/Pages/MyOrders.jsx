import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebaseMongo from '../Hooks/useFirebaseMongo';

const MyOrders = () => {
    const { firebase: { firebaseData }, mongodb: { isFetching, setIsFetching } } = useFirebaseMongo();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        setIsFetching(true);
        fetch(`https://infinite-forest-12039.herokuapp.com/users/${firebaseData?.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("idToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
                console.log(data, "users orders");
            }).finally(() => {
                setIsFetching(false);
            });
    }, [firebaseData.email]);


    const handleDelete = (id) => {
        const confirmation = window.confirm("are you really wanna delete?");
        if (confirmation) {
            axios.delete(`https://infinite-forest-12039.herokuapp.com/${id}`)
                .then(res => {
                    alert("Deleted successfully");
                    window.location.reload();
                });
        } else {
            alert("tnq to response us");
        }
    }

    if (isFetching) {
        return (
            <div className="h-screen flex items-center justify-center">
                <img src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="spinner-img" />
            </div>
        )
    }

    return (
        <div className="container mx-auto p-12">
            <div>
                {
                    !myOrders.length > 0 ? <div className="flex items-center justify-center text-4xl font-bold"> <h2>You didn't added any product yet! </h2>  </div>
                        :
                        myOrders?.map(item => {
                            return (
                                <div key={item._id} className="flex items-center justify-between shadow-md rounded-md px-8 py-5 mb-10">
                                    <img className="w-36 h-20 rounded-md" src={item?.image} alt="" />
                                    <h3>Tour Name:  {item?.name} </h3>
                                    <h3>Name:  {item?.displayName} </h3>
                                    <h3>Phone:  {item?.phone} </h3>
                                    <h3>Price:  ${item?.price} </h3>
                                    <button onClick={() => handleDelete(item?._id)} className="px-6 py-2 bg-red-600 text-white rounded-md">Delete </button>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default MyOrders
