"use client";
import React from 'react';
import Image from 'next/image';
// import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Index = () => {
    return (
        <footer className='w-full bg-white text-black'>
            <div className={'py-10'}>
                <div className='px-5 md:px-36 py-5 flex flex-col md:flex-row justify-between items-start w-full gap-4'>
                    <div className={'w-full md:w-1/4 flex flex-col gap-4'}>
                        <Link href={'/'}>
                            <Image
                                className='object-contain'
                                src='/images/logo.png'
                                width={100}
                                height={100}
                                alt='navbar logo'
                            />
                        </Link>
                        <p className={'text-left'}>
                            Expertly trained, battle-tested, elite software developers on demand
                        </p>
                        <ul className='flex flex-col justify-center items-start gap-4'>
                            <li>
                                <div className='flex justify-start items-center'>
                                    <LocalPhoneIcon /><span
                                    className={'pl-5'}>+9123456789</span>
                                </div>
                            </li>
                            <li>
                                <div className='flex justify-start items-center'>
                                    <EmailIcon /><span
                                    className={'pl-5'}>example@gmail.com</span>
                                </div>
                            </li>
                            <li>
                                <div className='flex justify-start items-center'>
                                    <LocationOnIcon /><span
                                    className={'pl-5'}>Address example <br></br>USA </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={'w-full md:w-1/4'}>
                        <ul className='flex flex-col justify-start items-start gap-4'>
                            <li><h3 className={'font-bold text-xl'}>Company</h3></li>
                            <li><Link href={'/'}>About Us</Link></li>
                            <li><Link href={'/'}>Success Stories</Link></li>
                            <li><Link href={'/'}>Privacy Policy</Link></li>
                            <li><Link href={'/'}>Terms & Conditions</Link></li>
                            <li><Link href={'/'}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={'w-full md:w-1/4'}>
                        <ul className='flex flex-col justify-start items-start gap-4'>
                            <li><h3 className={'font-bold text-xl'}>Services</h3></li>
                            <li><Link href={'/'}>Hire Permanent Staff</Link></li>
                            <li><Link href={'/'}>Staff Augmentation</Link></li>
                            <li><Link href={'/'}>Software Outsourcing</Link></li>
                            <li><Link href={'/'}>Build Remote Office</Link></li>
                        </ul>
                    </div>
                    <div className={'w-full md:w-1/4 flex flex-col justify-start items-start'}>
                        <h3 className={'font-bold text-xl pb-5'}>How to Start</h3>
                        <ul className='flex flex-col justify-center items-start gap-4'>
                            <li><Link href={'/'}>You Asked</Link></li>
                            <li><Link href={'/'}>We Proceed</Link></li>
                            <li><Link href={'/'}>Negotiate </Link></li>
                            <li><Link href={'/'}>You Get</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={'h-[1px] bg-gray-400'}></div>
                <div className={'px-5 md:px-36 py-5'}>
                    <p>@2024 Nucleus</p>
                </div>

            </div>
        </footer>
    );
};
export default Index;
