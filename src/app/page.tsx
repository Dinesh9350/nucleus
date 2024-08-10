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
import EasyProcess from "@/components/easy-process";

export default function Home() {

  return (
      <div className={'h-full w-full bg-gray-100'}>
          <div className={'relative'}>
              <HomeSection />
              <Trust />

          </div>
          <WhatWeDoSection heading={"What we do"} />
          <EasyProcess />
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
