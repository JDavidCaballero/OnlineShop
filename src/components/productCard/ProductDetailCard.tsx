import { useState } from "react";
import { ProductDetailCardProps } from "../../screens/productDetail/ProductDetail";

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex bg-white shadow-md rounded-lg p-6 w-[800px] h-full">
      <div className="w-1/3">
        <img
          src={product?.image}
          alt={product?.nombre}
          className="w-[200px] h-[200px] mx-auto rounded-md object-contain"
        />
      </div>
      <div className="w-2/3 pl-6 flex flex-col justify-center">
        <h1 className="text-2xl text-black font-bold mb-2">
          {product?.nombre}
        </h1>
        <p className="text-black mb-4">{product?.descripcion}</p>
        <p className="text-xl text-black font-semibold mb-4">
          ${product?.precio}
        </p>
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-300 text-black px-2 py-1 rounded-l"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="px-4 text-black py-1">{quantity}</span>
          <button
            className="bg-gray-300 text-black px-2 py-1 rounded-r"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
