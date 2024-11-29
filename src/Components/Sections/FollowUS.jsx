import React from 'react';
import cupImg1 from '../../../src/assets/cups/Rectangle 9.png';
import cupImg2 from '../../../src/assets/cups/Rectangle 10.png';
import cupImg3 from '../../../src/assets/cups/Rectangle 11.png';
import cupImg4 from '../../../src/assets/cups/Rectangle 12.png';
import cupImg5 from '../../../src/assets/cups/Rectangle 13.png';
import cupImg6 from '../../../src/assets/cups/Rectangle 14.png';
import cupImg7 from '../../../src/assets/cups/Rectangle 15.png';
import cupImg8 from '../../../src/assets/cups/Rectangle 16.png';
const FollowUS = () => {
    return (
        <>
            <section className='w-10/12 mx-auto text-center my-6'>
                <p className='text-[12px]'>Follow Us Now</p>
                <h1 className='text-xl md:text-4xl second-font'>Follow on Instagram</h1>
                <div className='grid gap-3 my-8 grid-cols-2 md:grid-cols-4'>
                    <div>
                        <img className='hover:scale-105 transition-all duration-500 cursor-pointer' src={cupImg1} alt="photo" />
                    </div>
                    <div>
                        <img className='hover:scale-105 transition-all duration-500 cursor-pointer' src={cupImg2} alt="photo" />
                    </div>
                    <div>
                        <img className='hover:scale-105 transition-all duration-500 cursor-pointer' src={cupImg3} alt="photo" />
                    </div>
                    <div>
                        <img className='hover:scale-105 transition-all duration-500 cursor-pointer' src={cupImg4} alt="photo" />
                    </div>
                    <div>
                        <img className='hover:scale-105 transition-all duration-500 cursor-pointer' src={cupImg5} alt="photo" />
                    </div>
                    <div>
                        <img className='hover:scale-105 transition-all duration-500 cursor-pointer' src={cupImg6} alt="photo" />
                    </div>
                    <div>
                        <img className='hover:scale-105 transition-all duration-500 cursor-pointer' src={cupImg7} alt="photo" />
                    </div>
                    <div>
                        <img className='hover:scale-105 transition-all duration-500 cursor-pointer' src={cupImg8} alt="photo" />
                    </div>
                </div>
            </section>
        </>

    );
};

export default FollowUS;