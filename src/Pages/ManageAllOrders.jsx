import axios from 'axios';
import { useState, useEffect } from 'react';

const ManageAllOrders = () => {

    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        axios.get("https://safe-headland-90262.herokuapp.com/ordered_tour")
            .then(res => {
                setMyOrders(res.data);
                console.log(res)
            })
    }, []);


    const handleDelete = (id) => {
        const confirmation = window.confirm("are you really wanna delete?");
        if (confirmation) {
            axios.delete(`https://safe-headland-90262.herokuapp.com/${id}`)
                .then(res => {
                    alert("Deleted successfully");
                    window.location.reload();
                });
        } else {
            alert("tnq to response us");
        }
    }



    return (
        <div className="container mx-auto p-12">
            <div>

                {
                    myOrders?.map(item => {
                        return (

                            <div key={item._id} className="flex items-center justify-between shadow-md rounded-md px-8 py-5 mb-10">
                                <img className="w-36 h-20 rounded-md" src={item?.image} alt="" />
                                <h3>Tour Name:  {item?.name} </h3>
                                <h3> Email: {item?.email} </h3>
                                <h3> phone: {item?.phone} </h3>
                                <h3> Price: ${item?.price} </h3>
                                <button onClick={() => handleDelete(item?._id)} className="px-6 py-2 bg-red-600 text-white rounded-md">Delete </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ManageAllOrders
