"use client"; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navigation = [
    {
        id: "0",
        title: "X",
        url: "https://x.com/MalcolmTech",
        onlyMobile: false,
    },
    {
        id: "1",
        title: "Github",
        url: "https://github.com/mutaremalcolm/technical-take-home_assesment",
        onlyMobile: false,
    },
    {
        id: "2",
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/malcolm-mutare-a234a61aa/",
        onlyMobile: false,
    },
    {
        id: "3",
        title: "Instagram",
        url: "https://www.instagram.com/malcolmfullstack/?igsh=cmdpdTRmdzN3eXh5",
        onlyMobile: false,
    },
];

const Navigation = () => {
    const [openNavigation, setOpenNavigation] = useState(false);
    const [currentHash, setCurrentHash] = useState<string | null>(null);

    useEffect(() => {
        setCurrentHash(window.location.hash);
    }, []);

    const mobileToggle = () => {
        setOpenNavigation(false);
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b
         border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ?
                'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <Link className="block w-[12rem] xl:mr-8" href="#hero">
                    <h1 className="font-code text-3xl uppercase text-n-1 
                    transition-colors hover:text-color-1">FlipDish</h1>
                </Link>
                <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] 
                left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <Link key={item.id} href={item.url} onClick={mobileToggle}
                                className={`block relative font-code text-2xl uppercase 
                                text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''} 
                                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === currentHash ?
                                        'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:hover:text-n-1 xl:px-12`}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>
                <a href="https://vercel.com/mutaremalcolms-projects/vite-typescript-portfolio"
                    className="hidden lg:block button mr-8 text-n-1/50 transition-colors hover:text-n-1">
                    Personal Portfolio
                </a>
                <button className="flex items-center mr-5 lg:mr-15 font-code text-n-1 transition-colors
                 hover:text-color-1">    
                </button>
            </div>
        </div>
    );
};

export default Navigation;
