import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    let loadedUsers = useLoaderData();
    let [users, setUsers] = useState(loadedUsers);
    let handleDeleteUser = (id) => {
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
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        let reaming = users.filter(user => user._id !== id)
                        setUsers(reaming);
                    })
            }
        });
    }
    return (
        <div className='w-10/12 my-14 border-2 mx-auto'>
            <h1 className='text-3xl text-center text-green-500 my-5'>Users Details</h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial No:</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-sm mr-1 rounded-none'><FaPen></FaPen></button>
                                    <button onClick={() => handleDeleteUser(user._id)} className='btn btn-sm rounded-none'><FaDeleteLeft></FaDeleteLeft></button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;