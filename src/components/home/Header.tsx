// 'use client';

// import { useState } from "react";

// const Header = () => {
//     const [showSideBar, setShowSideBar] = useState(false);

//     return (
//         <div className="p-4 border border-gray-500 flex items-center justify-between">
//             <div>
//             </div>
//             <div className="flex-1 items-center justify-evenly hidden sm:flex">
//                 <button>Home</button>
//                 <button>Services</button>
//                 <button>Blog</button>
//                 <button>About us</button>
//             </div>
//             <div className="sm:hidden cursor-pointer">
//                 <p onClick={() => setShowSideBar(!showSideBar)}>≣</p>
//             </div>

//             {
//                 showSideBar && (
//                     <div className="sm:hidden absolute top-12 left-0 w-[90vw] z-40 p-2 border border-gray rounded-md bg-white flex flex-col items-start">
//                         <button>Home</button>
//                         <button>Services</button>
//                         <button>Blog</button>
//                         <button>About us</button>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// export default Header;

// 'use client';

// import { ChevronDown, Menu, X } from "lucide-react";
// import { useState } from "react";

// const Header = () => {
//     const [showSideBar, setShowSideBar] = useState(false);

//     return (
//         <div className="px-6 py-4 flex items-center justify-between bg-white shadow-sm">
//             {/* Logo */}
//             <div className="flex items-center">
//                 <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                     <div className="text-black font-bold text-xl">
//                         <div className="flex flex-col items-center">
//                             <span className="text-2xl font-extrabold leading-none">S</span>
//                             <span className="text-xs font-semibold tracking-wider">SAVIOR HIRES</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-8">
//                 <button className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
//                     Home
//                 </button>

//                 <div className="relative group">
//                     <button className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200">
//                         About
//                         <ChevronDown className="ml-1 w-4 h-4" />
//                     </button>
//                 </div>

//                 <div className="relative group">
//                     <button className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200">
//                         Services
//                         <ChevronDown className="ml-1 w-4 h-4" />
//                     </button>
//                 </div>

//                 <div className="relative group">
//                     <button className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200">
//                         Practices
//                         <ChevronDown className="ml-1 w-4 h-4" />
//                     </button>
//                 </div>

//                 <button className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
//                     Blog
//                 </button>

//                 <button className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
//                     Career
//                 </button>
//             </div>

//             {/* Apply Now Button */}
//             <div className="hidden lg:block">
//                 <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200">
//                     Apply Now
//                 </button>
//             </div>

//             {/* Mobile Menu Toggle */}
//             <div className="lg:hidden cursor-pointer" onClick={() => setShowSideBar(!showSideBar)}>
//                 {showSideBar ? (
//                     <X className="w-6 h-6 text-gray-700" />
//                 ) : (
//                     <Menu className="w-6 h-6 text-gray-700" />
//                 )}
//             </div>

//             {/* Mobile Sidebar */}
//             {showSideBar && (
//                 <div className="lg:hidden absolute top-20 left-0 right-0 z-50 mx-4 bg-white border border-gray-200 rounded-lg shadow-lg">
//                     <div className="flex flex-col py-4">
//                         <button className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200">
//                             Home
//                         </button>

//                         <button className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200 flex items-center justify-between">
//                             About
//                             <ChevronDown className="w-4 h-4" />
//                         </button>

//                         <button className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200 flex items-center justify-between">
//                             Services
//                             <ChevronDown className="w-4 h-4" />
//                         </button>

//                         <button className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200 flex items-center justify-between">
//                             Practices
//                             <ChevronDown className="w-4 h-4" />
//                         </button>

//                         <button className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200">
//                             Blog
//                         </button>

//                         <button className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200">
//                             Career
//                         </button>

//                         <div className="px-6 py-3">
//                             <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200">
//                                 Apply Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Header;

'use client';

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import PlanRequest from "./PlanRequest";

const Header = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80 && !isScrolled) {
                setIsScrolled(true);
            } else if (window.scrollY <= 80 && isScrolled) {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [isScrolled]);

    return (
        // <div className="px-6 sticky top-0 z-30 transition-all duration-300 delay-300 py-4 flex items-center justify-between bg-white shadow-sm">
        <div className={`px-6 ${isScrolled ? 'sticky top-0 z-30 transition-all duration-300 ease-in-out' : ''} py-2 flex items-center justify-between bg-white shadow-sm`}>
            {/* Logo */}
            <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-black font-bold text-xl">
                        <div className="flex flex-col items-center">
                            <img src="/logo.png" alt="logo" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
                    Home
                </Link>

                <div className="relative group">
                    <Link href="/about" className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200">
                        About
                        {/* <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" /> */}
                    </Link>
                    {/* About Dropdown */}
                    {/* <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Our Story</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Our Team</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Mission & Vision</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Why Choose Us</a>
                        </div>
                    </div> */}
                </div>

                <div className="relative group">
                    <Link
                        href="/services"
                        className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200"
                    >
                        Services
                        {/* <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" /> */}
                    </Link>

                    {/* Services Dropdown */}
                    {/* <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Executive Search</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Permanent Recruitment</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Contract Staffing</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Talent Consulting</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">HR Solutions</a>
                        </div>
                    </div> */}
                </div>

                {/* <div className="relative group">
                    <button className="flex items-center text-gray-700 hover:text-black font-medium transition-colors duration-200">
                        Practices
                        <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                     Practices Dropdown 
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Technology</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Healthcare</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Finance & Banking</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Sales & Marketing</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Manufacturing</a>
                            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">Legal & Compliance</a>
                        </div>
                    </div>
                </div> */}

                {/* <p className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
                    Blog
                </p> */}

                <Link href="/#contact" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
                    Contact
                </Link>

                <Link href="/#plans" className="text-gray-700 hover:text-black font-medium transition-colors duration-200">
                    Plans
                </Link>
            </div>

            {/* Apply Now Button */}
            <div className="hidden lg:block">
                <p onClick={() => setOpen(true)} className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                    Apply Now
                </p>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden cursor-pointer" onClick={() => setShowSideBar(!showSideBar)}>
                {showSideBar ? (
                    <X className="w-6 h-6 text-gray-700" />
                ) : (
                    <Menu className="w-6 h-6 text-gray-700" />
                )}
            </div>

            {/* Mobile Sidebar */}
            {showSideBar && (
                <div className="lg:hidden absolute top-20 left-0 right-0 z-50 mx-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <div className="flex flex-col py-4">
                        <Link href="/" className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200">
                            Home
                        </Link>

                        <Link href="/about" className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200 flex items-center justify-between">
                            About
                            {/* <ChevronDown className="w-4 h-4" /> */}
                        </Link>

                        <Link href="/services" className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200 flex items-center justify-between">
                            Services
                            {/* <ChevronDown className="w-4 h-4" /> */}
                        </Link>

                        {/* <button className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200 flex items-center justify-between">
                            Practices
                            <ChevronDown className="w-4 h-4" />
                        </button> */}

                        {/* <button className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200">
                            Blog
                        </button> */}

                        <Link href="/#contact" className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200">
                            Contact
                        </Link>

                        <Link href="/#plans" className="text-left px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-black font-medium transition-colors duration-200">
                            Plans
                        </Link>

                        <div className="px-6 py-3">
                            <button onClick={() => setOpen(true)} className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 cursor-pointer">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <PlanRequest isOpen={open} onClose={() => setOpen(false)} />
        </div>
    )
}

export default Header;