import React from "react";

interface CategoryCardProps {
  name: string;
  imagePath: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  imagePath = "",
}) => {
  return (
    <div className="bg-gray-200 h-72 w-full flex flex-col justify-between rounded-md">
      <img
        src={imagePath}
        alt={name}
        className="h-48 w-full mx-auto rounded-md object-cover p-2.5"
      />
      <div className="flex-1 flex items-center justify-center p-2.5">
        <h3 className="text-center text-black border border-black p-1 hover:border-yellow-300">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
