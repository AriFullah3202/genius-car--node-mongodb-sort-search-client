import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setService(data)
                console.log(data)

            })
    }, [])


    return (
        <>
            <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
            </div>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    service.map(serve => {
                        return <ServiceCard key={serve._id} serve={serve}></ServiceCard>
                    })
                }
            </div>
        </>
    )
}

export default Service
