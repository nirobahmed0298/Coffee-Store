import React from 'react';
import headerImg from '../../../assets/more/15.jpg'
import logo from '../../../assets/more/logo1.png'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    let links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addcoffee'>Add Coffee</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
    </>
    return (
        <>
            <div style={{ backgroundImage: `url(${headerImg})` }} className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul id='menu'
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-10 h-10' src={logo} alt="Logo" />
                        <Link to='/' className='second-font text-white text-xl md:text-2xl'>Espresso Emporium</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='w-14 h-14' src="https://img.icons8.com/?size=100&id=108652&format=png&color=000000" alt="" />
                </div>
            </div>
        </>
    );
};

export default Header;