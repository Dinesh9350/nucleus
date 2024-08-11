import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

const images = [
    '/images/tech/tech1.png',
    '/images/tech/tech2.png',
    '/images/tech/tech3.png',
    '/images/tech/tech4.png',
    '/images/tech/tech1.png',
    '/images/tech/tech2.png',
    '/images/tech/tech3.png',
    '/images/tech/tech4.png',
];

const TechCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440, // Tailwind 'lg' breakpoint
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 960, // Tailwind 'md' breakpoint
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576, // Tailwind 'sm' breakpoint
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box sx={{ width: '80%', margin: '0 auto', paddingTop: 2 }}>
            <Slider {...settings}>
                {images.map((src, index) => (
                    <Box key={index} className={'flex justify-center items-center my-auto py-auto'} sx={{ padding: 1 }}>
                        <Image className={'m-auto h-full'} height={100} width={150} src={src} alt={`Slide ${index}`} />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default TechCarousel;
