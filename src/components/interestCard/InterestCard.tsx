import React from "react"

interface InterestCardProps {
  title: string
  description: string
  imagePath: string
}

const InterestCard: React.FC<InterestCardProps> = ({
  title,
  description,
  imagePath,
}) => {
  return (
    <div className="flex bg-orange-50 rounded-md w-full h-[120px] overflow-hidden">
      <div className="flex flex-col p-3 flex-1">
        <h2 className="text-lg font-bold text-black">{title}</h2>
        <p className="text-black text-left line-clamp-2">{description}</p>
        <div className="mt-auto">
          <span className="text-black">See more ---</span>
        </div>
      </div>
      <img
        src={imagePath}
        alt="Image"
        className="w-[90px] h-full object-cover rounded-r-md"
      />
    </div>
  )
}

export default InterestCard
