import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import '../styles/cursor.css';
import Drawer from '../components/Drawer';
import { GiToken } from 'react-icons/gi';
import DropdownMenu from '../components/DropdownMenu';

//https://velog.io/@bangina/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EA%BF%80%ED%8C%81-%EB%A7%88%EC%9A%B0%EC%8A%A4%EC%BB%A4%EC%84%9C-%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98-%EB%A7%8C%EB%93%A4%EA%B8%B0%EC%89%AC%EC%9B%80



const Navbar = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);



    const location = useLocation();
    const [isLogined, setIsLogined] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("accessLoginToken");
        setIsLogined(!!token)
    }, [location])


    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Auto-focus search input when expanded
    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    // Custom cursor movement
    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const handleMouseMove = (e: MouseEvent) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
        if (cursorRef.current) {
            cursorRef.current.classList.add('cursor-grow');
        }
        e.currentTarget.classList.add('hovered-link');
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        if (cursorRef.current) {
            cursorRef.current.classList.remove('cursor-grow');
        }
        e.currentTarget.classList.remove('hovered-link');
    };

    return (
        <>
            {location.pathname !== "/LoginPage" && (
                <div className="fixed top-4 right-6 z-[9999]">
                    {isLogined ? (

                        <div className="flex items-center justify-center text-xl mt-3 me-3 text-white"><DropdownMenu /></div>

                    ) : (
                        <a
                            href="/LoginPage"
                            className="flex items-center justify-center text-xl mt-3 me-3 text-white"
                        >
                            Login
                        </a>
                    )}
                </div>)}
            {/* Fixed Floating Navbar */}
            <nav className="fixed top-4 left-0 right-0 z-[9999] w-[92%] max-w-5xl mx-auto">
                {/* 1층: 반투명 배경 (z-0) */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-900/10 z-0 pointer-events-none" />

                {/* 2층: 마우스 커서 (z-10) */}
                <div ref={cursorRef} className="cursor" />

                {/* 3층: 글자 및 메뉴 콘텐츠 (z-20) */}
                <div className="relative z-20 flex items-center justify-between px-5 py-2.5 text-slate-800">

                    {/* Brand Logo */}
                    <Link
                        to="/"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="nav-link text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2 shrink-0 cursor-pointer"
                    >
                        <span>CALENDAR</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Expandable Search Bar */}
                        <div
                            className={`flex items-center rounded-full transition-all duration-300 ease-out border ${isSearchOpen
                                ? 'w-56 bg-slate-100/90 border-slate-300 px-3 py-1.5 shadow-inner'
                                : 'w-9 bg-transparent border-transparent px-1.5 py-1.5 hover:bg-slate-100/60'
                                }`}
                        >
                            <button
                                type="button"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className="text-slate-600 hover:text-slate-900 focus:outline-none shrink-0 cursor-pointer"
                                aria-label="Search"
                            >
                                <IoSearchOutline className="w-5 h-5" />
                            </button>

                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Search here..."
                                className={`bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-200 ${isSearchOpen ? 'w-full ml-2 opacity-100' : 'w-0 opacity-0 pointer-events-none'
                                    }`}
                                onKeyDown={(e) => {
                                    if (e.key === 'Escape') setIsSearchOpen(false);
                                }}
                            />

                            {isSearchOpen && (
                                <button
                                    type="button"
                                    onClick={() => setIsSearchOpen(false)}
                                    className="text-slate-400 hover:text-slate-700 ml-1 shrink-0 cursor-pointer"
                                >
                                    <IoCloseOutline className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Navigation Links */}
                        <ul className="flex items-center gap-6">
                            <li>
                                <Link
                                    to="/FeaturePage"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="nav-link text-sm font-medium text-slate-600"
                                >
                                    機能
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/PricingPage"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="nav-link text-sm font-medium text-slate-600"
                                >
                                    料金
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/ErrorPage"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="nav-link text-sm font-medium text-slate-600"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/user-card"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className="nav-link text-sm font-medium text-slate-600"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Hamburger Button */}

                    <button
                        type="button"
                        onClick={() => setIsDrawerOpen(true)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="lg:!hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                        aria-label="Open menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer Menu */}
            <Drawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />
        </>
    );
};

export default Navbar;


