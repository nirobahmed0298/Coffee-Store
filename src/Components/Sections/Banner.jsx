import React from 'react';
import bannerImg from '../../assets/more/3.png'
import iconImg1 from '../../assets/icons/1.png';
import iconImg2 from '../../assets/icons/2.png';
import iconImg3 from '../../assets/icons/3.png';
import iconImg4 from '../../assets/icons/4.png';
const Banner = () => {
    return (
        <>
            <div className='h-[100vh] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className='flex flex-col justify-center items-center text-white space-y-1 second-font text-center space-y-1 h-[100vh]'>
                    <h1 className='text-2xl md:text-5xl font-bold'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='opacity-60'>It's coffee time - Sip & Savor - Relaxation in every sip! <br />Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='btn border-none text-white font-semibold px-10 rounded-sm bg-[#E3B577]'>Learn More</button>
                </div>
            </div>
            <div className='bg-[#ECEAE3]'>
                <div className='w-10/12 mx-auto'>
                    <div className='grid gap-8 py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <div>
                            <img className='w-12 h-12' src={iconImg1} alt="icon" />
                            <h1 className='text-lg font-bold'>Awesome Aroma</h1>
                            <p className='text-[12px]'>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                        <div>
                            <img className='w-12 h-12' src={iconImg2} alt="icon" />
                            <h1 className='text-lg font-bold'>High Quality</h1>
                            <p className='text-[12px]'>
                                We served the coffee to you maintaining the best quality
                            </p>
                        </div>
                        <div>
                            <img className='w-12 h-12' src={iconImg3} alt="icon" />
                            <h1 className='text-lg font-bold'>Pure Grades</h1>
                            <p className='text-[12px]'>
                                The coffee is made of the green coffee beans which you will love
                            </p>
                        </div>
                        <div>
                            <img className='w-12 h-12' src={iconImg4} alt="icon" />
                            <h1 className='text-lg font-bold'>Proper Roasting</h1>
                            <p className='text-[12px]'>
                                Your coffee is brewed by first roasting the green coffee beans
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;