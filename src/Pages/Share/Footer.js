import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className='mt-5'>
                <div className="bg-primary p-5">
                    <div className='mt-3 grid'>
                        <div className='col-3  footerContainer'>
                            <h4>About</h4>
                            <p>Yoga does not remove us from the reality or responsibilities of everyday life but rather places our feet firmly and resolutely in the practical ground of experience...</p>
                        </div>
                        <div className='col-3  footerContainer'>
                            <h4>TESTIMONIALS</h4>
                            <p>"There's nothing you can't do." <span>– Robby Robinson</span></p>
                            <p>"To be a champion You must act like one Act like a champion.” <span></span></p>
                            <p>“Prove Them Wrong” <span></span></p>

                        </div>
                        <div className=' col-3   footerContainer'>
                            <h4>CLASSES</h4>
                            <Link to="/home" className='text-decoration-none fw-bold' >Go to Another →</Link>
                        </div>
                        <div className='col-3  footerContainer'>
                            <h4>CONTACTS</h4>
                            <p>Sundays @ 10:00a
                                London, UK
                                10, Firs Avenue, Muswell Hill,
                                Tel: 02 562-958
                                Mobile: 02 562-95
                                E-mail: hello@fitness.com</p>
                            <Link to="/home" className='text-decoration-none fw-bold' >Go to Another →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer