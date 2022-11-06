import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import OrderRow from './OrderRow';

const Order = () => {
    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user ?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                console.log(data)
            })
    }, [user ?.email])
    const handleDelete = _id => {
        const proceed = window.confirm('Are you want to delete this order')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted count successfully')
                        const remaining = order.filter(odr => odr._id !== _id);
                        setOrder(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h1 className="text-5xl">You have {order.length} Orders.</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete}></OrderRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    )
}

export default Order
