import React from "react";
import MainNavigationBar from "../components/mainNavigationBar/MainNavigationBar";
import amazonLogo from "../assets/amazon_logo.png";
import MainBanner from "../components/mainBanner/MainBanner";
import RecommendedCategories from "../components/recommendedCategories/RecommendedCategories";
import CategoryCard from "../components/categoryCard/CategoryCard";
import InterestCard from "../components/interestCard/InterestCard";
import SignInBanner from "../components/signInBanner/SignInBanner";
import ProductCard from "../components/productCard/ProductCard";

const LandingPage: React.FC = () => {
  const navigationItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    // Add more items as needed
  ];
  const products = [
    {
      title: "Product 1",
      description: "Description of Product 1",
      logo: "https://plus.unsplash.com/premium_photo-1672280727393-ab6f0b26f527?q=80&w=1389&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product 2",
      description: "Description of Product 2",
      logo: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // Add more products here
  ];
  const categoryItems = [
    {
      title: "Beauty picks",
      path: "/",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Computer and accesorues",
      path: "/about",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "video Games",
      path: "/contact",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "toys Games",
      path: "/contact",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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

  const mockProducts = [
    {
      image:
        "https://www.rei.com/media/f4d84903-e99c-491b-85d3-aec6a688840b?size=2000",
      category: "Electronics",
      title: "Wireless Bluetooth Headphones",
      stars: 4,
      reviewCount: 120,
      price: 99.99,
    },
    {
      image:
        "https://www.rei.com/media/f4d84903-e99c-491b-85d3-aec6a688840b?size=2000",
      category: "Books",
      title: "The Great Adventure",
      stars: 5,
      reviewCount: 75,
      price: 19.99,
    },
    {
      image:
        "https://www.rei.com/media/f4d84903-e99c-491b-85d3-aec6a688840b?size=2000",
      category: "Home & Kitchen",
      title: "Stainless Steel Cookware Set",
      stars: 4.5,
      reviewCount: 200,
      price: 129.99,
    },
    {
      image:
        "https://www.rei.com/media/f4d84903-e99c-491b-85d3-aec6a688840b?size=2000",
      category: "Fashion",
      title: "Leather Jacket",
      stars: 4.7,
      reviewCount: 90,
      price: 89.99,
    },
    {
      image:
        "https://www.rei.com/media/f4d84903-e99c-491b-85d3-aec6a688840b?size=2000",
      category: "Toys & Games",
      title: "Board Game Set",
      stars: 4.2,
      reviewCount: 150,
      price: 49.99,
    },
  ];

  return (
    <div className="flex-col space-y-5 ">
      <div className="flex items-center space-x-4 ">
        <img src={amazonLogo} alt="Amazon Logo" className="w-20" />
        <MainNavigationBar navigationItems={navigationItems} />
      </div>
      <MainBanner products={products} />
      <RecommendedCategories
        username="John"
        categories={["Kitchen", "Electronics", "hola", "dsa"]}
      />
      <div className="flex space-x-1 ">
        {categoryItems.map((category) => (
          <CategoryCard name={category.title} imagePath={category.image} />
        ))}
      </div>
      <div className="flex space-x-2 ">
        {interestItems.map((interest) => (
          <InterestCard
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
          {mockProducts.map((product) => (
            <ProductCard
              image={product.image}
              category={product.category}
              title={product.title}
              stars={product.stars}
              reviewCount={product.reviewCount}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
