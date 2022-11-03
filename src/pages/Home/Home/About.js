import React from 'react'
import person from '../../../assets/images/about_us/person.jpg'
import part from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero py-10 my-20 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 relative">

                    <img src={person} className="w-4/5 rounded-lg shadow-2xl" />
                    <img src={part} className="absolute top-3/4 right-5 w-3/5 rounded-lg shadow-2xl" />
                </div>
                <div className="w-1/2">
                    <p className="py-4 text-red-900">About us</p>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of experience
                        in this field
                    </h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    )
}

export default About
