import React from "react";

interface TextContainerProps {
    heading: string;
    description: string;
}

const TextContainer: React.FC<TextContainerProps> = ({ heading, description }) => {
    return (
        <div className={'flex flex-col pt-10 px-5 md:px-10 xl:px-36 h-full w-full'}>
            <h3 className="font-bold text-3xl md:text-5xl w-full lg:w-[50rem]">
                {heading}
            </h3>
            <p className={'py-4 w-full  md:w-[25rem]'}>{description}</p>
        </div>
    );
};

export default TextContainer;
