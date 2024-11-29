import React, { useState } from 'react';
import { FaCoffee, FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const PopulerProducts = ({ loadedCoffees }) => {
    let [coffees,setCoffees] = useState(loadedCoffees);
    let handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        let remaing = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaing)
                    })
            }
        });

    }
    return (
        <section className='w-10/12 mx-auto'>
            <div className='text-center my-10'>
                <p className='text-[12px]'>--- Sip & Savor ---</p>
                <h1 className='text-xl md:text-4xl second-font'>Our Popular Products</h1>
                <Link to='/addcoffee' className='btn bg-[#E3B577] text-white rounded-sm my-2'>Add Coffee <FaCoffee></FaCoffee></Link>
                <div className='my-8 grid gap-4 grid-cols-1 md:grid-cols-2'>
                    {
                        coffees.map(coffee =>
                            <div key={coffee._id} className="card card-side rounded-md bg-[#F5F4F1]">
                                <figure>
                                    <img
                                        src={coffee.photoURL} alt="Coffee.." />
                                </figure>
                                <div className="flex gap-1 items-center p-4">
                                    <div className='text-left'>
                                        <h6><span className='text-[17px] font-semibold'>Name:</span> <span className='text-[16px]'>{coffee.name}</span></h6>
                                        <h6><span className='text-[17px] font-semibold'>Chef:</span> <span className='text-[16px]'>{coffee.details}</span> </h6>
                                        <h6><span className='text-[17px] font-semibold'>Price:</span> <span className='text-[16px]'>{coffee.price}</span></h6>
                                    </div>
                                    <div className="join join-vertical space-y-2">
                                        <Link to={`/details/${coffee._id}`} className="join-item btn  bg-[#D2B48C] text-lg text-white"><FaEye></FaEye></Link>
                                        <Link to={`/updateCoffee/${coffee._id}`} className="join-item btn  bg-black text-lg  text-white"><MdEdit></MdEdit></Link>
                                        <button onClick={() => handleDelete(coffee._id)} className="join-item btn  bg-red-500 text-lg  text-white"><MdDelete></MdDelete></button>
                                    </div>
                                </div>
                            </div>
                        )}

                </div>
            </div>
        </section >
    );
};

export default PopulerProducts;