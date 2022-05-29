import React from 'react'
import personalimg from "../../img/personal/personal.JPG"

const Protfolio = () => {
    return (
        <div>
            <div>
                <div class="hero min-h-screen" >
                    <div class="hero-overlay bg-opacity-60"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-5xl font-bold">Hello  !</h1>
                            <p class="mb-5 text-2xl">I am Omar Faruk Emon. I have big dream that which is I want to be a Professional Web deploper. Thats why I Work hard and try my Best.</p>
                            <button class="btn btn-primary">Explore ME</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3'>
                <div className='p-10 bg-base-200'>
                    <b className='text-3xl'>MY Personal Info</b>
                    <li className='text-2xl'>Name: Mohammad Omar Faruk Emon</li>
                    <li className='text-2xl'>Address: Raozan, Chittagram</li>
                    <li className='text-2xl'>Email: emon35293@gmail.com</li>
                    <li className='text-2xl'>List of technologies: <br />
                        1.Html <br />
                        2.Css <br />
                        3.Bootstrap <br />
                        4.Tailwind <br />
                        5.Daisyui <br />
                        6.Javascript <br />
                        7.React <br />
                        8.Firebase <br />
                        9.Nodejs <br />
                        10.MongoDb <br />
                        11.Expressjs <br />
                    </li>
                </div>
                <div className=''>
                    <img className='lg:w-full mt-3' src={personalimg} alt="" />
                </div>
                <div className='p-10 bg-base-200'>
                    <b className='text-3xl'>MY Educational Background:</b>
                    <li className='text-2xl'>Jsc in 2016</li>
                    <li className='text-2xl'>Ssc in 2019</li>
                    <li className='text-2xl'>Hsc in 2021</li>
                    <li className='text-2xl'>Bsc Starting</li>
                </div>
            </div>
            <div className='mx-auto text-center'>
                <div className='w-full'>
                    <b className='text-2xl text-center'>MY WebSite</b>
                </div>
                <div className='grid gap-3'>
                    <a href="https://assigment-11-d5db3.web.app/" target="_blank">Site 1</a>
                    <a href="https://gym-center-f59ed.firebaseapp.com/" target="_blank">Site 2</a>
                    <a href="https://spiffy-haupia-4af6b8.netlify.app/reviews" target="_blank">Site 2</a>

                </div>
            </div>
        </div >
    )
}

export default Protfolio