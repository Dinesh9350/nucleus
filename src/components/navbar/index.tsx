'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {



    return (
        <header className='w-full navbar fixed h-24  z-50'>
            <nav className='flex justify-between items-center py-2 px-5 md:px-36 '>
                <Link href={'/'} className={'hidden md:block'}>
                    <Image
                        className='object-contain'
                        src={
                            '/images/logo.png'
                        }
                        width={70}
                        height={70}
                        alt={'navbar logo'}
                    />
                </Link>
                <ul className='flex justify-between items-center py-2 lg:px-14 md:px-12 sm:px-5 px-2 gap-8'>
                    <li><Link href={'/'}>How to Start</Link></li>
                    <li><Link href={'/our-services'}>Service</Link></li>
                    <li><Link href={'/technologies'}>Technologies </Link></li>
                    <li><Link href={'/careers'}>Careers</Link></li>
                    <li><button onClick={() => {}} className={' border-2 border-orange-400 text-orange-400 text-sm rounded-md p-2'}>BUILD A TEAM</button></li>
                    <li><Link href={'/'}>Meet Our Team</Link></li>
                </ul>

            </nav>
        </header>
    );
};

export default Navbar;