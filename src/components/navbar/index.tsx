'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [view, setView] = useState('view1');

    // Corrected handleViewChange function
    const handleViewChange = (
        event: React.MouseEvent<HTMLElement>,
        newView: string
    ) => {
        // Only update state if newView is not null or undefined
        if (newView !== null && newView !== undefined) {
            setView(newView);
        }
    };

    useEffect(() => {
        console.log("path--", pathname);
    }, [pathname]);

    return (
        <header className='w-full navbar fixed h-24 z-50'>
            <nav className='flex justify-between items-center py-2 px-5 md:px-36'>
                <Link href={'/'} className={'hidden md:block'}>
                    <Image
                        className='object-contain'
                        src={'/images/logo.png'}
                        width={70}
                        height={70}
                        alt={'navbar logo'}
                    />
                </Link>
                <ul className='flex justify-between items-center py-2 lg:px-14 md:px-12 sm:px-5 px-2 gap-8'>
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
                                Service
                            </p>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/technologies'}>
                            <p className={pathname === '/technologies' ? 'text-orange-400' : ''}>
                                Technologies
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
                        <button onClick={() => setIsOpen(true)} className={'border-2 border-orange-400 text-orange-400 text-sm rounded-md p-2'}>
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
            <Dialog open={isOpen} maxWidth="md" onClose={() => setIsOpen(false)}>
                <DialogContent>
                    <div className={'p-4'}>
                        <p className={'font-bold text-4xl'}>Build a Team</p>
                        <p className={'py-2'}>We specialize in helping you build a team.</p>
                        <div>
                            <ToggleButtonGroup
                                value={view}
                                exclusive
                                onChange={handleViewChange}
                                aria-label="View toggle"
                            >
                                <ToggleButton className={'py-2'} value="view1" aria-label="View 1">
                                    <p className={'px-8'}> Option 1</p>
                                </ToggleButton>
                                <ToggleButton value="view2" aria-label="View 2">
                                    <p className={'px-8'}> Option 2</p>
                                </ToggleButton>
                            </ToggleButtonGroup>

                            {view === 'view1' ? (
                                <div>
                                    {/* Content for View 1 */}
                                    <h1>View 1 Content</h1>
                                    <p>This is the first view.</p>
                                </div>
                            ) : (
                                <div>
                                    {/* Content for View 2 */}
                                    <h1>View 2 Content</h1>
                                    <p>This is the second view.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsOpen(false)} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </header>
    );
};

export default Navbar;
