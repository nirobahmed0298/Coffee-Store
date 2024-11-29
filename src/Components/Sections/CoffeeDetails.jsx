import React from 'react';
import banner from '../../assets/more/11.png'
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const CoffeeDetails = () => {
    let coffeeDetails = useLoaderData();
    return (
        <section style={{ backgroundImage: `url(${banner})` }}>
            <div className='w-8/12 mx-auto my-10 '>
                <Link to='/' className='btn bg-none hover:bg-none shadow-none border-none second-font'><FaArrowLeft></FaArrowLeft> Back To Home</Link>
                <div className='bg-[#F4F3F0] my-5'>
                    <div className='md:flex justify-between items-center p-4'>
                        <img src={coffeeDetails.photoURL} alt="image" />
                        <div className='space-y-1 text-left p-4 md:w-[70%]'>
                            <h6 className='md:text-4xl second-font border-b-2 border-green-300 pb-2'>Niceties</h6>
                            <h6><span className='text-[16px] font-semibold'>Name:</span> <span className='text-[15px]'>{coffeeDetails.name}</span></h6>
                            <h6><span className='text-[16px] font-semibold'>Chef:</span> <span className='text-[15px]'>{coffeeDetails.chef}</span></h6>
                            <h6><span className='text-[16px] font-semibold'>Price:</span> <span className='text-[15px]'>{coffeeDetails.price}</span></h6>
                            <h6><span className='text-[16px] font-semibold'>Category:</span> <span className='text-[15px]'>{coffeeDetails.category}</span></h6>
                            <h6><span className='text-[16px] font-semibold'>Details:</span> <span className='text-[15px]'>{coffeeDetails.details}</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoffeeDetails;