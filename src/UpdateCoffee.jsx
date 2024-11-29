import React from 'react';
import banner from '../src/assets/more/11.png'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpdateCoffee = () => {
    let updateCoffee = useLoaderData();
    let handleUpdateCoffee = (e) => {
        e.preventDefault();
        let form = e.target;
        let name = form.name.value;
        let chef = form.chef.value;
        let price = form.price.value;
        let taste = form.taste.value;
        let category = form.category.value;
        let details = form.details.value;
        let photoURL = form.photoURL.value;
        let updateCoffeeItem = { name, chef, price, taste, category, details, photoURL }
        fetch(`https://coffee-store-server-virid-phi.vercel.app/coffee/${updateCoffee._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateCoffeeItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Update Coffee Item Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }
    return (
        <section style={{ backgroundImage: `url(${banner})` }}>
            <div className='w-8/12 mx-auto my-10 '>
                <Link to='/' className=' btn bg-none hover:bg-none shadow-none border-none second-font'><FaArrowLeft></FaArrowLeft> Back To Home</Link>
                <div className=' bg-[#F4F3F0] p-10 my-6'>
                    <h1 className='text-xl md:text-4xl my-1 text-center second-font'>Update Coffee</h1>
                    <p className='text-[12px] opacity-60 text-center'>It is a long established fact that a reader will be distraceted by the readable content of a <br /> page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    <form onSubmit={handleUpdateCoffee}>
                        <div className='md:flex gap-4 space-y-2'>
                            <div className="form-control md:w-[50%] ">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" placeholder="Enter coffee name" name='name' defaultValue={updateCoffee.name} className="input border-none rounded-sm input-bordered" />
                            </div>
                            <div className="form-control  md:w-[50%]">
                                <label className="label">
                                    <span className="label-text font-semibold">Chef</span>
                                </label>
                                <input type="text" placeholder="Enter coffee Chef" name='chef' defaultValue={updateCoffee.chef} className="input border-none rounded-sm input-bordered" />
                            </div>
                        </div>
                        <div className='md:flex gap-4'>
                            <div className="form-control md:w-[50%]">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <input type="text" placeholder="Enter coffee Price" name='price' defaultValue={updateCoffee.price} className=" input border-none rounded-sm input-bordered" />
                            </div>
                            <div className="form-control md:w-[50%]">
                                <label className="label">
                                    <span className="label-text font-semibold">Taste</span>
                                </label>
                                <input type="text" placeholder="Enter coffee Taste" name='taste' defaultValue={updateCoffee.taste} className=" input border-none rounded-sm input-bordered" />
                            </div>
                        </div>
                        <div className='md:flex gap-4'>
                            <div className="form-control md:w-[50%]">
                                <label className="label">
                                    <span className="label-text font-semibold">Category</span>
                                </label>
                                <input type="text" placeholder="Enter coffee Category" name='category' defaultValue={updateCoffee.category} className=" input border-none rounded-sm input-bordered" />
                            </div>
                            <div className="form-control md:w-[50%]">
                                <label className="label">
                                    <span className="label-text font-semibold">Details</span>
                                </label>
                                <input type="text" placeholder="Enter coffee Details" name='details' defaultValue={updateCoffee.details} className=" input border-none rounded-sm input-bordered" />
                            </div>
                        </div>
                        <div className="form-control col-span-12">
                            <label className="label">
                                <span className="label-text font-semibold">Photo</span>
                            </label>
                            <input type="text" placeholder="Enter coffee PhotoURL" name='photoURL' defaultValue={updateCoffee.photoURL} className=" input border-none rounded-sm input-bordered" />
                        </div>
                        <button className='w-full btn second-font bg-[#D2B48C] text-black border-black my-5 rounded-sm'>Update Coffee</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateCoffee;