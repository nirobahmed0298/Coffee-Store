import React, { useContext } from 'react';
import banner from '../../../assets/more/11.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    let {logInUser } = useContext(AuthContext)
    let handleLogin = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let name = e.target.name.value;
        let password = e.target.email.value;
        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                let lastSignInTime = result?.user?.metadata?.lastSignInTime;
                let loginInfo = {email,lastSignInTime}
                console.log(loginInfo);
                fetch('http://localhost:5000/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(loginInfo)

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
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className='text-green-500 text-center text-2xl font-bold'>Login</h1>
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <p className='text-center my-2'>You have no account,please <Link to='/register' className='text-green-500 underline'>Register</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Login;