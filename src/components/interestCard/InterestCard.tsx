import React from "react";

interface InterestCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const InterestCard: React.FC<InterestCardProps> = ({
  title,
  description,
  imagePath,
}) => {
  return (
    <div className="rounded flex columns-2 bg-orange-50 rounded-md w-full h-[120px]">
      <div className="textContainer flex flex-col p-3 items-start w-[350px] h">
        <h2 className="text-lg font-bold text-black">{title}</h2>
        <p
          className="text-black text-left
         text-ellipsis"
        >
          {description}
        </p>
        <div className="flex items-center justify-start">
          <span className="text-black">See more ---</span>
        </div>
      </div>
      <img
        src={imagePath}
        alt="Image"
        className="ml-auto w-[90px] h-full rounded"
      />
    </div>
  );
};

export default InterestCard;
