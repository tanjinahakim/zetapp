import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const navLinks=[
  {
    path:'/',
    title:'Home'
  },
  {
    path:'/aboutus',
    title:'About Us'
  },
  {
    path:'/partner',
    title:'Partner With Us'
  },
  {
    path:'/blog',
    title:'Blog'
  },
]
const NavBar = () => {
    return (
        <>
          <nav className="navbar bg-base-100 max-w-6xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {
                  navLinks.map(({path,title})=> <li key={path}>
                    <Link href={path}>{title}</Link>
                  </li>)
                }
              </ul>
            </div>
            <div>
              <Image src='zet_logo.svg' alt='ZET' width={100} height={100}></Image>
            </div> 
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black">
            {
                  navLinks.map(({path,title})=> <li key={path}>
                    <Link href={path}>{title}</Link>
                  </li>)
            }
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-md text-white text-lg bg-blue-600">Download ZET</a>
          </div>
        </nav>
        <div className="divider"></div>
        </>

    );
};

export default NavBar;