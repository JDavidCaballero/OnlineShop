import React from "react"

interface ProductCardProps {
  image: string
  category: string
  title: string
  stars: number
  reviewCount: number
  price: number
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
    <div className="bg-gray-200 rounded w-full h-[300px] flex flex-col justify-between p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-1/2 object-contain mb-2"
      />
      <div className="text-black font-semibold">{category}</div>
      <div className="text-black">{title}</div>
      <div className="flex justify-between text-black text-sm">
        <p>{stars} ⭐</p>
        <p>{reviewCount} Reviews</p>
      </div>
      <div className="text-black font-bold text-xl">${price}</div>
    </div>
  )
}

export default ProductCard
