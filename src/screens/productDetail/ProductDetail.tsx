import { useLocation } from "react-router-dom";
import { RecommendedProduct } from "../../api/recommendedProducts/RecommendedProducts";
import ProductDetailCard from "../../components/productCard/ProductDetailCard";

export interface ProductDetailCardProps {
  product?: RecommendedProduct;
}

const ProductDetail: React.FC = () => {
  const location = useLocation();

  const { product } = location.state as { product: RecommendedProduct };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-black">Product Detail</h1>
      <ProductDetailCard product={product} />
    </div>
  );
};

export default ProductDetail;
