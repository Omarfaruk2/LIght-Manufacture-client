import React from 'react'
import "../Home/Spicial.css"

const SpicialLook = () => {



    return (
        <div>
            <div className='w-full'>
                <h2 className='text-5xl text-primary mb-5 text-center font-bold'>Special Look</h2>
                <div className='grid gap-4 m-4 lg:grid-cols-2 grid-cols-1'>
                    <img data-aos="fade-right" data-aos-duration="2000" className="height" src="https://image.made-in-china.com/44f3j00FQhTmujPYVla/Phone-APP-WiFi-Smart-Color-Change-7W-9W-12W-WiFi-LED-Bulb-RGB-LED-Bulb.jpg" alt="" />
                    <img data-aos="fade-left" data-aos-duration="2000" className='w-full height' src="https://img.freepik.com/free-vector/luminant-lamp-idea-concept_1284-50251.jpg?size=626&ext=jpg&ga=GA1.2.1198299981.1652771125" alt="" />
                </div>
            </div>
        </div>
    )
}

export default SpicialLook