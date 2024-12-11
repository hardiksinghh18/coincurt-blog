"use client";
import { navData } from '@/app/utils/static';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);  // To detect client-side rendering

    const menuClass = "text-xs md:text-sm lg:text-sm font-semibold text-center relative bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white hover:scale-105 transition-all duration-500";

    const handleScroll = () => {
        if (window.scrollY <= 0) {
            // Always show navbar at the top
            setShowNavbar(true);
        } else if (window.scrollY > lastScrollY) {
            // Hide navbar when scrolling down
            setShowNavbar(false);
        } else {
            // Show navbar when scrolling up
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        // Ensure the scroll event runs only on the client-side
        if (typeof window !== 'undefined') {
            setIsClient(true);
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [lastScrollY]);

    if (!isClient) {
        return null; // Don't render anything during SSR
    }

    return (
        <div className={`fixed text-white top-0 z-50 py-3 w-screen transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className={`max-w-7xl flex items-center justify-between transition-all duration-500 py-4 px-4 md:px-8 h-16 shadow-sm shadow-slate-800 border-slate-800 rounded-full bg-gradient-to-t from-slate-950 to-slate-800 mx-auto`}>
                <Link href="/">
                    <img
                        src="https://cloud.appwrite.io/v1/storage/buckets/6714f80f001ae401933e/files/6714f82900153f4b6665/view?project=668ed9d30039cf5df558&project=668ed9d30039cf5df558"
                        alt="coincurt"
                        className="md:w-16 w-14"
                    />
                </Link>

                {/* Hamburger Icon for mobile */}
                <div className="md:hidden z-40" onClick={toggleMenu}>
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>

                {/* Menu for larger screens */}
                <div className="hidden md:flex items-center gap-5 ">
                    {
                        navData.map((i) => (
                            <Link
                                key={i.name}
                                href={i.link}
                                className={menuClass}
                            >
                                {i.name}
                            </Link>
                        ))
                    }
                </div>

                {/* Dropdown Menu for mobile */}
                <div className={`md:hidden fixed top-0 left-0 h-screen w-full bg-opacity-90 bg-black  z-10 flex flex-col items-center justify-center gap-8 transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {
                        navData.map((i) => (
                            <Link
                                key={i.name}
                                href={i.link}
                                className="text-xl font-semibold text-white"
                                onClick={toggleMenu}
                            >
                                {i.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
