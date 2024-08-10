import React from "react";


interface BgImageSectionProps {
    heading: string;
    description: string;
}

const BgImageSection: React.FC<BgImageSectionProps>  = ({heading, description}) => {
    return (
        <div className={'relative customBg w-full h-full py-24'}>
            <div className={'flex flex-col justify-center items-center gap-16 z-10'}>
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className={' flex flex-col justify-center items-center gap-4 z-10'}>
                    <h3 className={'font-bold text-white text-5xl md:text-5xl text-center w-[20rem]'}>
                        {
                            heading
                        }
                    </h3>
                    <p className={'text-white'}>
                        {
                            description
                        }
                    </p>
                </div>
            </div>

        </div>
    )
}

export default BgImageSection;