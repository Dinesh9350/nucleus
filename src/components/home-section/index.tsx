'use client';
import React from 'react';
import Image from 'next/image';
import WhatWeDoCard from "@/components/what-we-do-card";
import {stakeDropxsData} from "@/utils";
import ProcessCard from "@/components/process-card";
import ContactUsSection from "@/components/contact-us-section";
import FeaturesCard from "@/components/features-card";
import SpecializedSection from "@/components/specialized-section";
import Technology from "@/components/technology";
import Clients from "@/components/clients";
import Connect from "@/components/connect";

const HomeSection = () => {
    return (
        <>
            <div className="bg-gray-50 h-full overflow-hidden px-5 md:px-36 pt-36 pb-40">
                <div className={'relative flex flex-col md:flex-row justify-end items-center w-full h-full'}>
                    <div
                        className={'absolute flex flex-col gap-4 p-8 bg-white w-[40rem] left-0 self-center rounded-xl borderTopRight z-10'}>
                        <h3 className={'font-bold text-5xl md:text-5xl'}>
                            Custom Software Solutions for Business Leaders
                        </h3>
                        <p className={'text-lg'}>
                            We specialize in creating custom software solutions that solve complex business challenges
                            for small to mid-sized businesses. With a combination of US-based management and offshore
                            development expertise, we deliver top-notch services that maximize your ROI.
                        </p>
                        <button className={'bg-[#44CEF6] text-white px-4 py-3 rounded-md w-[10rem]'}>Build a Team
                        </button>
                    </div>
                    <div className={' w-[100%]'}>
                        <Image className={'my-auto float-right '} width={750}
                               height={200} src={'/images/hero-img.png'}
                               alt={'home image'}/>
                    </div>
                </div>
                {/*<div className={'bg-white w-full absolute bottom-[-50px]'}>*/}
                {/*    <h3 className={'font-bold text-orange-400 text-5xl md:text-4xl text-center'}>*/}
                {/*        Amazing clients who trust us*/}
                {/*    </h3>*/}
                {/*    <div className={'flex justify-between items-center '}>*/}
                {/*        <Image src={'/images/clientLogo.png'} height={50} width={50} alt={'clientLogo'}/>*/}
                {/*        <Image src={'/images/clientLogo.png'} height={50} width={50} alt={'clientLogo'}/>*/}
                {/*        <Image src={'/images/clientLogo.png'} height={50} width={50} alt={'clientLogo'}/>*/}
                {/*        <Image src={'/images/clientLogo.png'} height={50} width={50} alt={'clientLogo'}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
            <FeaturesCard/>
            <div className={'w-full h-full bg-[#44CEF6] px-5 md:px-36 '}>
                <div className={'pt-20 flex flex-col justify-center items-center text-center gap-4'}>
                    <p className={'text-white font-bold text-xl '}>How to Start</p>
                    <h3 className={'font-bold text-5xl md:text-5xl'}>
                        Easy Process
                    </h3>
                    <p className={'text-lg w-[25rem]'}>We specialize in helping you build a team of expert developers,
                        testers,
                        and leaders.</p>
                </div>
                <div className={'flex justify-center items-center gap-24 pt-10 pb-20'}>
                    <Image src={'/images/process/process1.png'} alt={"process"} height={200} width={200}/>
                    <Image src={'/images/process/process2.png'} alt={"process"} height={200} width={200}/>
                    <Image src={'/images/process/process3.png'} alt={"process"} height={200} width={200}/>
                    <Image src={'/images/process/process4.png'} alt={"process"} height={200} width={200}/>
                </div>
            </div>
            <ContactUsSection/>
            <FeaturesCard/>
            <SpecializedSection/>
            <ContactUsSection/>
            <Technology/>
            <Clients/>
            <ContactUsSection/>
            <Connect />

        </>
    );
};

export default HomeSection;
