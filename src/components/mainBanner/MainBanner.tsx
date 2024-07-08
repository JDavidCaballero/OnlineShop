import React, { useState, useEffect } from "react";
import { RecommendedProduct } from "../../api/recommendedProducts/RecommendedProducts";

interface MainBannerProps {
  products: RecommendedProduct[];
}

const MainBanner: React.FC<MainBannerProps> = ({ products }) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("slide-in-from-left");

  useEffect(() => {
    if (products.length <= 1) {
      return; // Exit early if there's only one product, no need for animation.
    }

    const interval = setInterval(() => {
      setAnimationClass("slide-out-to-left");
      setTimeout(() => {
        setCurrentProductIndex(
          (prevIndex) => (prevIndex + 1) % products.length
        );
        setAnimationClass("slide-in-from-left");
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [products.length]);

  let currentProduct: RecommendedProduct | null = null;

  currentProduct = products.length === 0 ? null : products[currentProductIndex];

  return (
    <div className="box-border h-[52] w-[550] bg-gray-200 rounded p-4 border-4">
      <div className={`left-section flex flex-row columns-2 ${animationClass}`}>
        <div className="flex flex-col items-start">
          <h1 className="text-black text-left w-80 h-15 truncate">
            {currentProduct?.nombre}
          </h1>
          <h2 className="text-black text-left w-80 [h-50px] overflow-hidden overflow-ellipsis truncate">
            {currentProduct?.descripcion}
          </h2>
          <button className="mt-4 bg-black-300 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            Go To Product
          </button>
        </div>
        <div className="right-section flex items-center justify-center">
          <img
            src={currentProduct?.image}
            alt="Product Logo"
            className="object-contain w-[1000px] h-[200px] rounded-lg object-cover"
          />
        </div>
      </div>
      {products.length > 1 && (
        <div className="dots absolute flex space-x-1">
          {products.map((_, index) => (
            <span
              key={_._id}
              className={`h-3 w-3 rounded-full ${
                index === currentProductIndex ? "bg-yellow-500" : "bg-white"
              }`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainBanner;
