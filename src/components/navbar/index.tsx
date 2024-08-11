'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Dialog,
    DialogContent,
    IconButton,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        console.log("path--", pathname);
    }, [pathname]);

    // Function to handle closing dialog after clicking a link
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <header className='w-full navbar fixed top-0 h-24 z-50  shadow-md'>
            <nav className='flex justify-between items-center py-2 px-5 lg:px-36'>
                <Link href={'/'}>
                    <Image
                        className='object-contain'
                        src={'/images/logo.png'}
                        width={70}
                        height={70}
                        alt={'navbar logo'}
                    />
                </Link>
                <div className='lg:hidden flex items-center'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-orange-400 text-xl'>
                        ☰
                    </button>
                </div>
                <ul className='hidden lg:flex justify-between items-center py-2 lg:px-14 sm:px-12 px-5 gap-8'>
                    <li>
                        <Link href={'/how-to-start'}>
                            <p className={pathname === '/how-to-start' ? 'text-orange-400' : ''}>
                                How to Start
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/our-services'}>
                            <p className={pathname === '/our-services' ? 'text-orange-400' : ''}>
                                Service <KeyboardArrowDownIcon />
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/technologies'}>
                            <p className={pathname === '/technologies' ? 'text-orange-400' : ''}>
                                Technologies <KeyboardArrowDownIcon />
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/careers'}>
                            <p className={pathname === '/careers' ? 'text-orange-400' : ''}>
                                Careers
                            </p>
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => setIsOpen(!isOpen)} className='border-2 border-orange-400 text-orange-400 text-sm rounded-md p-2'>
                            BUILD A TEAM
                        </button>
                    </li>
                    <li>
                        <Link href={'/'}>
                            <p className={pathname === '/' ? 'text-orange-400' : ''}>
                                Meet Our Team
                            </p>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Dialog open={isOpen} onClose={handleClose} fullScreen={true}>
                <DialogContent className="flex flex-col w-full  h-full bg-white">
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="menu"
                        className="self-end text-orange-400 text-xl"
                    >
                        ☰
                    </IconButton>
                    <ul className='flex flex-col h-full justify-center'>
                        <li className='py-4 text-center'>
                            <Link href={'/how-to-start'} onClick={handleClose}>
                                <p className={pathname === '/how-to-start' ? 'text-orange-400' : ''}>
                                    How to Start
                                </p>
                            </Link>
                        </li>
                        <li className='py-4 text-center'>
                            <Link href={'/our-services'} onClick={handleClose}>
                                <p className={pathname === '/our-services' ? 'text-orange-400' : ''}>
                                    Service <KeyboardArrowDownIcon />
                                </p>
                            </Link>
                        </li>
                        <li className='py-4 text-center'>
                            <Link href={'/technologies'} onClick={handleClose}>
                                <p className={pathname === '/technologies' ? 'text-orange-400' : ''}>
                                    Technologies <KeyboardArrowDownIcon />
                                </p>
                            </Link>
                        </li>
                        <li className='py-4 text-center'>
                            <Link href={'/careers'} onClick={handleClose}>
                                <p className={pathname === '/careers' ? 'text-orange-400' : ''}>
                                    Careers
                                </p>
                            </Link>
                        </li>
                        <li className='py-4 text-center'>
                            <button onClick={handleClose} className='border-2 border-orange-400 text-orange-400 text-sm rounded-md p-2'>
                                BUILD A TEAM
                            </button>
                        </li>
                        <li className='py-4 text-center'>
                            <Link href={'/'} onClick={handleClose}>
                                <p className={pathname === '/' ? 'text-orange-400' : ''}>
                                    Meet Our Team
                                </p>
                            </Link>
                        </li>
                    </ul>
                </DialogContent>
            </Dialog>
        </header>
    );
};

export default Navbar;
