import React, { useEffect, useState, useRef } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service, setService] = useState([]);
    const [isAse, setIsAse] = useState(true);
    const searchRef = useRef();
    // search hocche sorasori value k amra pacch
    useEffect(() => {
        fetch(`http://localhost:5000/services?order=${isAse ? 'asc' : 'dese'}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
                console.log(data)

            })
    }, [isAse])

    const handleSearch = () => {
        console.log(searchRef.current.value)
    }
    return (
        <>
            <div className="text-center">
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <input className="input input-sm" ref={searchRef} type="text" />
                <button onClick={handleSearch}>Search</button>
                <button className='btn' onClick={() => setIsAse(!isAse)}>{isAse ? 'desc' : 'asc'}</button>
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
