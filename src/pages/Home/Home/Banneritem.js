import React from 'react'
import "./Banner.css"


const Banneritem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full rounded-xl">
            <div className="carousel-img">
                <img src={image} className="w-full" />

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className="text-6xl font-bold text-white">
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                     </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                <h1 className="font-bold text-white">
                    therre are many variations of passages fof available
                     </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-warning mr-5">warning</button>
                <button className="btn btn-outline btn-warning">warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1/4">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    )
}

export default Banneritem
