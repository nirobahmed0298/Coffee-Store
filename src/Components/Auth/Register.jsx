import React, { useContext } from 'react';
import banner from '../../assets/more/11.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const Register = () => {
    let { createUser } = useContext(AuthContext);
    let handleRegister = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let name = e.target.name.value;
        let password = e.target.email.value;
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                let newUser = { name, email }
                //Send DB
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                    })


            })
            .catch(error => console.log(error.message))
    }
    return (

        <section>
            <div style={{ backgroundImage: `url(${banner})` }} className='w-5/12 mx-auto my-10 border-2'>
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className='text-green-500 text-center text-2xl font-bold'>Register</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className='text-center my-2'>if You have already account,please <Link to='/login' className='text-green-500 underline'>Login</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Register;
