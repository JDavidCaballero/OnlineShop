import React from "react";

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  stars: number;
  reviewCount: number;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  category,
  title,
  stars,
  reviewCount,
  price,
}) => {
  return (
    <div className="product-card bg-gray-200 rounded w-[250px] h-[300px] flex flex-col items-center justify-center p-4">
      <img
        src={image}
        alt={title}
        className="product-card__image basis-1/2 w-3/4 h-3/4 object-contain"
      />
      <div className="product-card__category text-black mt-2 basis-1/4">
        {category}
      </div>
      <div className="product-card__title text-black mt-2 basis-1/4">
        {title}
      </div>
      <div className="flex mt-2 w-full basis-1/4">
        <p className="flex-1 text-black">{stars} stars</p>
        <p className="flex-1 text-black ml-2">{reviewCount} Reviews</p>
      </div>
      <div className="product-card__price text-black font-bold text-2xl mt-2 basis-1/4">
        ${price}
      </div>
    </div>
  );
};

export default ProductCard;
