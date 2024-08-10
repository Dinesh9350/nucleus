import React from "react";

interface TextContainerProps {
    heading: string;
    description: string;
}

const TextContainer: React.FC<TextContainerProps> = ({ heading, description }) => {
    return (
        <div className={'flex flex-col pt-20 px-32'}>
            <h3 className="font-bold text-3xl md:text-5xl w-[50rem]">
                {heading}
            </h3>
            <p className={'py-4  w-[25rem]'}>{description}</p>
        </div>
    );
};

export default TextContainer;
