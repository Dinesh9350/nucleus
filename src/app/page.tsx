'use client'
import Image from "next/image";
import HomeSection from "@/components/home-section";
import FeaturesCard from "../components/what-we-do-section";
import ContactUsSection from "@/components/contact-us-section";
import SpecializedSection from "@/components/specialized-section";
import Technology from "@/components/technology";
import Clients from "@/components/clients";
import Connect from "@/components/connect";
import React from "react";
import Trust from "@/components/trust";
import {whatWeDoHeading} from "@/utils";
import WhatWeDoSection from "../components/what-we-do-section";
import HireSection from "@/components/hire-section";

export default function Home() {

  return (
      <div className={'h-full w-full bg-gray-100'}>
          <div className={'relative'}>
              <HomeSection />
              <Trust />

          </div>


          <WhatWeDoSection heading={"What we do"} />
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
          <HireSection heading={"Hire Permanent and Remote Developers"} description={"From full-time remote engineering teams to hourly contractors, work with remote devs as needed"}/>
          <SpecializedSection/>
          <ContactUsSection/>
          <Technology/>
          <Clients/>
          <ContactUsSection/>
          <Connect />

      </div>
  );
}
