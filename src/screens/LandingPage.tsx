import React, { useState } from "react";
import MainNavigationBar from "../components/mainNavigationBar/MainNavigationBar";
import amazonLogo from "../assets/amazon_logo.png";
import MainBanner from "../components/mainBanner/MainBanner";
import RecommendedCategories from "../components/recommendedCategories/RecommendedCategories";
import CategoryCard from "../components/categoryCard/CategoryCard";
import InterestCard from "../components/interestCard/InterestCard";
import SignInBanner from "../components/signInBanner/SignInBanner";
import ProductCard from "../components/productCard/ProductCard";
import getRecommendedProducts, {
  RecommendedProduct,
} from "../api/recommendedProducts/RecommendedProducts";
import { useQuery } from "react-query";
import getProductsCategories, {
  ProductCategory,
} from "../api/categories/Categories";

const LandingPage: React.FC = () => {
  const navigationItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    // Add more items as needed
  ];

  const interestItems = [
    {
      title: "Explore the Outdoors",
      description: "Discover the best trails, parks, and outdoor activities.",
      imagePath:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Culinary Delights",
      description:
        "Experience the best dining and cuisine from around the world.",
      imagePath:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const [recommendedProducts, setRecommendedProducts] = useState<
    RecommendedProduct[]
  >([]);

  const [categories, setCategories] = useState<ProductCategory[]>([]);

  useQuery("getProductsCategories", async () => {
    const response = await getProductsCategories();
    if (response !== null) {
      console.warn("categories", response);
      setCategories(response as ProductCategory[]);
      return;
    }
    return [""];
  });

  useQuery("getRecommendedProducts", async () => {
    const response = await getRecommendedProducts();

    if (response !== null) {
      setRecommendedProducts(response as RecommendedProduct[]);
      return;
    }
    return {
      _id: 0,
      productID: "",
      nombre: "",
      descripcion: "",
      categoria: "",
      precio: 0,
      image: "",
    };
  });

  return (
    <div className="flex-col space-y-5 ">
      <div className="flex items-center space-x-4 ">
        <img src={amazonLogo} alt="Amazon Logo" className="w-20" />
        <MainNavigationBar navigationItems={navigationItems} />
      </div>
      <MainBanner products={recommendedProducts} />
      <RecommendedCategories
        username="John"
        categories={["Kitchen", "Electronics", "hola", "dsa"]}
      />
      <div className="flex space-x-1 ">
        {categories.length > 0 &&
          categories.map((category, index) => (
            <CategoryCard
              key={`${category.name}${index}`}
              name={category.name}
              imagePath={category.image}
            />
          ))}
      </div>
      <div className="flex space-x-2 ">
        {interestItems.map((interest) => (
          <InterestCard
            key={interest.title}
            title={interest.title}
            description={interest.description}
            imagePath={interest.imagePath}
          />
        ))}
      </div>
      <SignInBanner />
      <div className="space-y-5">
        <h2 className="font-bold text-black text-left">Recommended Products</h2>
        <div className="flex space-x-2">
          {recommendedProducts.length > 0 &&
            recommendedProducts.map((product) => (
              <ProductCard
                key={product.nombre}
                image={product.image}
                category={product.categoria}
                title={product.nombre}
                stars={product.stars}
                reviewCount={product.review}
                price={product.precio}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
