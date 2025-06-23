import React from "react"
import MainBanner from "../../components/mainBanner/MainBanner"
import RecommendedCategories from "../../components/recommendedCategories/RecommendedCategories"
import CategoryCard from "../../components/categoryCard/CategoryCard"
import InterestCard from "../../components/interestCard/InterestCard"
import SignInBanner from "../../components/signInBanner/SignInBanner"
import ProductCard from "../../components/productCard/ProductCard"
import { useSelector } from "react-redux"
import { UserState } from "../../store/userSlice"
import { useLandingPage } from "./LandingPage"

const LandingPage: React.FC = () => {
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
  ]
  const user = useSelector((state: { user: UserState }) => state.user)

  const { recommendedProducts, categories } = useLandingPage()

  return (
    <div className="container mx-auto px-4 space-y-9">
      <MainBanner products={recommendedProducts} />
      {user.isLoggedIn && categories.length > 0 && (
        <div className="flex w-auto space-x-1 ">
          <RecommendedCategories username={user.name} categories={categories} />
        </div>
      )}
      <div className="space-y-3">
        <h2 className="font-bold text-black text-left">
          Categories to explore
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 gap-4">
          {categories.length > 0 &&
            categories.map((category, index) => (
              <CategoryCard
                key={`${category.name}${index}`}
                name={category.name}
                imagePath={category.image}
              />
            ))}
        </div>
      </div>
      {/* this will be last 2 products visited*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {interestItems.map((interest) => (
          <InterestCard
            key={interest.title}
            title={interest.title}
            description={interest.description}
            imagePath={interest.imagePath}
          />
        ))}
      </div>
      {!user.isLoggedIn && <SignInBanner />}
      <div className="space-y-5">
        <h2 className="font-bold text-black text-left">Trending Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
  )
}

export default LandingPage
