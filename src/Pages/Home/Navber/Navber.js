import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navber.css"

const Header = () => {

    // fixed Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle_part("active", window.scrollY > 100)
    })

    // Toogle Menu
    const [Mobile, setMobile] = useState(false)

    return (
        <>
            <header className='header'>
                <div className="d_flex md:px-7">
                    <div className="logo">
                        <h2>
                            <NavLink to="/" className='text-2xl '>EDVORA</NavLink>
                        </h2>
                    </div>

                    <div className="navlink">
                        {/* <ul className='link f_flex uppercase'> */}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                            <li><NavLink to='/' className='text-xl '>Home</NavLink></li>
                            <li><NavLink to='/products' className='text-xl '>Products</NavLink></li>
                            <li><NavLink to='/dashboard' className='text-xl '>Dashboard</NavLink></li>
                            <li><NavLink to='/contact' className='text-xl '>Contact</NavLink></li>
                            <li>
                                <button className='btn btn-NavLink btn-outline  text-decoration-none fs-5'>Sign out</button>
                            </li>
                            {/* <li>
                                <NavLink to='/login' className='rounded-lg text-xl '>Login</NavLink>
                            </li> */}
                        </ul>

                        <button className='toggle_part' onClick={() => setMobile(!Mobile)}>
                            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;