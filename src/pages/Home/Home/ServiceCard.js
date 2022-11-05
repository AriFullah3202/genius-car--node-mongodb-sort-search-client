import React from 'react'
import { Link } from 'react-router-dom';

const ServiceCard = ({ serve }) => {

    const { _id, img, title, price } = serve;
    console.log(title);
    return (
        <div>
            <div className="card card-compact w-90 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className="h-48" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-2xl text-orange-600 font-semibold">Price : ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${_id}`}>
                            <button className="btn btn-primary">Checkout</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
